import './config/reactotron'

import React from 'react'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from '~/store'
import { Loader } from '~/ui/components'

import App from './app'

function Main() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
        <Loader />
      </PersistGate>
    </Provider>
  )
}

export default Main
