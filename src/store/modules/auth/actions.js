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
