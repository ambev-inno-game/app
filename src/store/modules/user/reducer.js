import { AUTH_LEVEL } from '~/res/constants'

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
    default:
      return state
  }
}
