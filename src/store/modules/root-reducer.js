import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'

import AsyncStorage from '@react-native-community/async-storage'

import auth from './auth/reducer'

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

export default combineReducers({
  auth: persistReducer(authPersistConfig, auth),
})
