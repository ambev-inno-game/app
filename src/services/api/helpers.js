import axios from 'axios'

import { store } from '~/store'
import * as authActions from '~/store/modules/auth/actions'

import { AuthApiService } from './index'

let isAlreadyFetchingAccessToken = false

// This is the list of waiting requests that will retry after the JWT refresh complete
let subscribers = []

function onAccessTokenFetched(accessToken) {
  // When the refresh is successful, we start retrying the requests one by one and empty the queue
  subscribers.forEach((callback) => callback(accessToken))
  subscribers = []
}

function addSubscriber(callback) {
  subscribers.push(callback)
}

export async function refreshTokenAndRetryRequests({ error, refreshToken }) {
  try {
    const { response: errorResponse } = error

    if (!refreshToken) {
      // We can't refresh, throw the error anyway
      return Promise.reject(error)
    }
    /* Proceed to the token refresh procedure
    We create a new Promise that will retry the request,
    clone all the request configuration from the failed
    request in the error object. */
    const retryOriginalRequest = new Promise((resolve) => {
      /* We need to add the request retry to the queue
    since there another request that already attempt to
    refresh the token */
      addSubscriber((accessToken) => {
        errorResponse.config.headers.Authorization = `Bearer ${accessToken}`
        resolve(axios(errorResponse.config))
      })
    })

    if (!isAlreadyFetchingAccessToken) {
      isAlreadyFetchingAccessToken = true

      const {
        loggedToken,
        refreshToken: newRefreshToken,
      } = await AuthApiService.refreshToken({
        refreshToken,
      })

      if (!loggedToken || !refreshToken) {
        return Promise.reject(error)
      }

      store.dispatch(
        authActions.updateTokensOnState({
          accessToken: refreshToken,
          refreshToken: newRefreshToken,
        })
      ) // save the newly refreshed token for other requests to use
      isAlreadyFetchingAccessToken = false
      onAccessTokenFetched(loggedToken)
    }

    return retryOriginalRequest
  } catch (err) {
    return Promise.reject(err)
  }
}
