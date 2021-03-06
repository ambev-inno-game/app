import ACTIONS_TYPES from './action-types'

export function userLogin({ email, password }) {
  return {
    type: ACTIONS_TYPES.USER_LOGIN,
    payload: {
      email,
      password,
    },
  }
}

export function userLoginSuccess({ name, email, token, refreshToken }) {
  return {
    type: ACTIONS_TYPES.USER_LOGIN_SUCCESS,
    payload: {
      name,
      email,
      token,
      refreshToken,
    },
  }
}

export function userLoginFailure({ message }) {
  return {
    type: ACTIONS_TYPES.USER_LOGIN_FAILURE,
    payload: {
      message,
    },
  }
}

export function updateTokensOnState({ accessToken, refreshToken }) {
  return {
    type: ACTIONS_TYPES.UPDATE_TOKENS_ON_STATE,
    payload: {
      accessToken,
      refreshToken,
    },
  }
}

export function setHasReadTutorial(hasRead) {
  return {
    type: ACTIONS_TYPES.SET_HAS_READ_TUTORIAL,
    payload: {
      hasRead,
    },
  }
}

export function leadLogin({ name }) {
  return {
    type: ACTIONS_TYPES.LEAD_LOGIN,
    payload: {
      name,
    },
  }
}
