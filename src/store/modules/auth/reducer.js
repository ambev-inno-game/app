import ACTIONS_TYPES from './action-types'

const INITIAL_STATE = {
  isLoggedIn: false,
  authLevel: '',
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsZXZlbCI6ImFub255bW91cyIsImlhdCI6MTU5NzAxMzMzNiwiZXhwIjoxNTk3MDE0NTM2fQ.LOB-gFMVTE4JL02c883kLKnjuztKBNPO4jYXLg7BnJo',
  refreshToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWlAaGFja2F0aG9uLWFtYmV2LmNvbSIsImxldmVsIjoibG9nZ2VkIiwiaWF0IjoxNTk3MDk5NjU1LCJleHAiOjE1OTcxNDM0NTV9.eefqm8enH2toA65JapMQfrgZkwdPSw92cmVV6SU74dU',
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
    default:
      return state
  }
}
