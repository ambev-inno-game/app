/* eslint-disable no-console */

import { NativeModules } from 'react-native'
import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import reactotronSaga from 'reactotron-redux-saga'

import AsyncStorage from '@react-native-community/async-storage'

if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode

  const scriptHostName = scriptURL.split('://')[1].split(':')[0]

  const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({ host: scriptHostName })
    .use(reactotronRedux())
    .use(reactotronSaga())
    .useReactNative()
    .connect()

  reactotron.clear()

  console.tron = reactotron
}
