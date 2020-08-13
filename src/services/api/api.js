/* eslint-disable no-param-reassign */
import axios from 'axios'

import { API_BASE_URL } from '@env'

import { HTTP_STATUS } from '~/res/constants'
import { store } from '~/store'

import * as apiHelpers from './helpers'

const api = axios.create({
  baseURL: API_BASE_URL,
})

api.interceptors.request.use((config) => {
  const { accessToken } = store.getState().auth
  config.headers.Authorization = accessToken

  return config
})

api.interceptors.response.use(
  (resp) => {
    return Promise.resolve(resp.data)
  },
  (error) => {
    const { status } = error.response

    if (status === HTTP_STATUS.FORBIDDEN) {
      const { refreshToken } = store.getState().auth

      apiHelpers.refreshTokenAndRetryRequests({ error, refreshToken })
      return true
    }

    return Promise.reject(error)
  }
)

export default api
