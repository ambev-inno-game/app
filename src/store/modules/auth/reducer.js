import { AUTH_LEVEL } from '~/res/constants'

import ACTIONS_TYPES from './action-types'

const INITIAL_STATE = {
  isLoggedIn: false,
  authLevel: '',
  accessToken: '',
  refreshToken: '',
  hasReadTutorial: false,
  isLoggingIn: false,
}

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTIONS_TYPES.UPDATE_TOKENS_ON_STATE: {
      const { accessToken, refreshToken } = action.payload

      return {
        ...state,
        accessToken,
        refreshToken,
      }
    }
    case ACTIONS_TYPES.SET_HAS_READ_TUTORIAL: {
      const { hasRead } = action.payload

      return {
        ...state,
        hasReadTutorial: hasRead,
      }
    }
    case ACTIONS_TYPES.USER_LOGIN: {
      return {
        ...state,
        isLoggingIn: true,
      }
    }
    case ACTIONS_TYPES.USER_LOGIN_SUCCESS: {
      const { token, refreshToken } = action.payload

      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        authLevel: AUTH_LEVEL.USER,
        accessToken: token,
        refreshToken,
      }
    }
    case ACTIONS_TYPES.USER_LOGIN_FAILURE: {
      return {
        ...state,
        isLoggingIn: false,
      }
    }
    default:
      return state
  }
}
