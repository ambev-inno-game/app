import React, { useLayoutEffect } from 'react'
import { WebView } from 'react-native-webview'

import { AppHeader, ScreenLoader } from '~/ui/components'

export function FaqScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <AppHeader title='FAQ' />,
    })
  }, [navigation])

  return (
    <WebView
      startInLoadingState
      renderLoading={() => <ScreenLoader />}
      source={{ uri: 'https://www.ambev.com.br/contato/' }}
    />
  )
}
