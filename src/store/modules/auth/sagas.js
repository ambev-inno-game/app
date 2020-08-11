import { takeLatest, all, call, put } from 'redux-saga/effects'

import { NavigationService } from '~/services'
import { AuthApiService } from '~/services/api'

import ACTION_TYPES from './action-types'
import * as authActions from './actions'

// admi@hackathon-ambev.com
// batata
export function* userLogin({ payload }) {
  try {
    const { email, password } = payload

    const { name, token, refreshToken } = yield call(AuthApiService.userLogin, {
      email,
      password,
    })

    yield put(
      authActions.userLoginSuccess({ name, email, token, refreshToken })
    )
  } catch (e) {
    yield put(authActions.userLoginFailure())
  }
}

export function userLoginSuccess({ payload }) {
  const { name, email } = payload

  // TODO update user state
  NavigationService.pushReplacement({ screen: 'DrawerNavigation' })
}

export default all([
  takeLatest(ACTION_TYPES.USER_LOGIN, userLogin),
  takeLatest(ACTION_TYPES.USER_LOGIN_SUCCESS, userLoginSuccess),
])
