import AUTH_ACTION_TYPES from '../auth/action-types'

const INITIAL_STATE = {
  name: '',
  email: '',
}

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_ACTION_TYPES.USER_LOGIN_SUCCESS: {
      const { name, email } = action.payload

      return {
        ...state,
        name,
        email,
      }
    }
    case AUTH_ACTION_TYPES.LEAD_LOGIN: {
      const { name } = action.payload

      return {
        ...state,
        name,
      }
    }
    default:
      return state
  }
}
