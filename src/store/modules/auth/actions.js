import ACTIONS_TYPES from './action-types'

export function login() {
  return {
    type: ACTIONS_TYPES.LOGIN,
  }
}

export function loginSuccess() {
  return {
    type: ACTIONS_TYPES.LOGIN_SUCCESS,
  }
}

export function loginFailure() {
  return {
    type: ACTIONS_TYPES.LOGIN_FAILURE,
  }
}

export function updateTokensOnState({ accessToken, refreshToken }) {
  console.log({ accessToken, refreshToken })
  return {
    type: ACTIONS_TYPES.UPDATE_TOKENS_ON_STATE,
    payload: {
      accessToken,
      refreshToken,
    },
  }
}
