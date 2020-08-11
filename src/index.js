import './config/reactotron'

import React from 'react'
import { YellowBox } from 'react-native'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from '~/store'
import { Loader, Toast } from '~/ui/components'

import App from './app'

function Main() {
  YellowBox.ignoreWarnings(['Require cycles are allowed'])

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
        <Loader />
        <Toast />
      </PersistGate>
    </Provider>
  )
}

export default Main
