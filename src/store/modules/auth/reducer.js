import ACTION_TYPES from './action-types'

const INITIAL_STATE = {
  exampleResult: null,
}

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.EXAMPLE: {
      return {
        ...state,
        exampleResult: 'TESTE',
      }
    }
    default:
      return state
  }
}
