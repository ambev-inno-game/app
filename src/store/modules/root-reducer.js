import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'

import AsyncStorage from '@react-native-community/async-storage'

import auth from './auth/reducer'
import user from './user/reducer'

const authPersistConfig = {
  key: 'bebabem_auth',
  storage: AsyncStorage,
  whitelist: [
    'accessToken',
    'refreshToken',
    'isLoggedIn',
    'authLevel',
    'hasReadTutorial',
  ],
}

const userPersistConfig = {
  key: 'bebabem_user',
  storage: AsyncStorage,
  whitelist: ['name', 'email'],
}

export default combineReducers({
  user: persistReducer(userPersistConfig, user),
  auth: persistReducer(authPersistConfig, auth),
})
