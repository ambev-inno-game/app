import { takeLatest, all } from 'redux-saga/effects'

import { API_KEY } from '@env'

import { AuthApiService } from '~/services/api'

import ACTION_TYPES from './action-types'

export function* userLogin() {}

export default all([takeLatest(ACTION_TYPES.USER_LOGIN, userLogin)])
