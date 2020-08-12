import { takeLatest, all, call, put, getContext } from 'redux-saga/effects'

import { NavigationService, ToastService } from '~/services'
import { AuthApiService } from '~/services/api'

import ACTION_TYPES from './action-types'
import * as authActions from './actions'

export function* userLogin({ payload }) {
  try {
    const { email, password } = payload

    const auth = yield getContext(AuthApiService.context)
    const { name, token, refreshToken } = yield call(
      [auth, AuthApiService.userLogin],
      {
        email,
        password,
      }
    )

    yield put(
      authActions.userLoginSuccess({ name, email, token, refreshToken })
    )
  } catch ({ response }) {
    yield put(
      authActions.userLoginFailure({ message: response?.data?.message })
    )
  }
}

export function* userLoginSuccess() {
  const navigation = yield getContext(NavigationService.context)
  yield call([navigation, NavigationService.pushReplacement], {
    screen: 'DrawerNavigation',
  })
}

export function* userLoginFailure({ payload }) {
  const toast = yield getContext(ToastService.context)
  yield call([toast, ToastService.show], {
    message: payload.message || 'Ops. Houve um erro ao fazer login!',
  })
}

export default all([
  takeLatest(ACTION_TYPES.USER_LOGIN, userLogin),
  takeLatest(ACTION_TYPES.USER_LOGIN_SUCCESS, userLoginSuccess),
  takeLatest(ACTION_TYPES.USER_LOGIN_FAILURE, userLoginFailure),
])
