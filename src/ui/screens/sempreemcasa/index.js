import React, { useLayoutEffect } from 'react'
import { WebView } from 'react-native-webview'

import { AppHeader, ScreenLoader } from '~/ui/components'

export function SempreEmCasaScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <AppHeader showBackButton title='Sempre em Casa' />,
    })
  }, [navigation])

  return (
    <WebView
      startInLoadingState
      renderLoading={() => <ScreenLoader />}
      source={{ uri: 'https://sempreemcasa.com.br/collections/todos' }}
    />
  )
}
