/* eslint-disable camelcase */
import './config/reactotron'

import React from 'react'
import { YellowBox } from 'react-native'
import { Provider } from 'react-redux'

import { AppLoading } from 'expo'
import { useFonts } from 'expo-font'
import { PersistGate } from 'redux-persist/integration/react'

import { Poppins_700Bold } from '@expo-google-fonts/poppins'
import { Roboto_400Regular } from '@expo-google-fonts/roboto'

import { store, persistor } from '~/store'
import { Loader, Toast } from '~/ui/components'

import App from './app'

function Main() {
  YellowBox.ignoreWarnings(['Require cycles are allowed'])
  const [whereFontsLoaded] = useFonts({
    Roboto_400Regular,
    Poppins_700Bold,
  })

  if (!whereFontsLoaded) {
    return <AppLoading />
  }

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
