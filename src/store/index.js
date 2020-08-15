/* eslint-disable no-console */
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import AsyncStorage from '@react-native-community/async-storage'

import * as services from '~/services'

import createStore from './create-store'
import reducers from './modules/root-reducer'
import sagas from './modules/root-saga'

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null

const sagaMiddleware = createSagaMiddleware({ sagaMonitor, context: services })

const middlewares = [sagaMiddleware]

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer, middlewares)
const persistor = persistStore(store)

persistStore(store).purge()

sagaMiddleware.run(sagas)

export { store, persistor }
