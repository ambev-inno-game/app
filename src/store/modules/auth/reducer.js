import ACTION_TYPES from './action-types'

const INITIAL_STATE = {
  exampleResult: null,
}

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.example: {
      console.log('reducer')
      return {
        ...state,
        exampleResult: action.payload.result,
      }
    }
    default:
      return state
  }
}
