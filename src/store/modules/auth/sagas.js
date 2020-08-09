import { takeLatest, put, all } from 'redux-saga/effects'

import ACTION_TYPES from './action-types'

export function* example() {
  // console.log('saga')
  // Example saga
}

export default all([takeLatest(ACTION_TYPES.EXAMPLE, example)])
