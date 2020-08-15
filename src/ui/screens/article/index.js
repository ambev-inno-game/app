import React, { useLayoutEffect } from 'react'
import { WebView } from 'react-native-webview'

import { AppHeader, ScreenLoader } from '~/ui/components'

export function ArticleScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <AppHeader title='Ambev Recicla' />,
    })
  }, [navigation])

  return (
    <WebView
      startInLoadingState
      renderLoading={() => <ScreenLoader />}
      source={{ uri: 'https://www.ambev.com.br/sustentabilidade/' }}
    />
  )
}
