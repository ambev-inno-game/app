import React, { useLayoutEffect, useState } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { WebView } from 'react-native-webview'

import { COLORS } from '~/res'
import { AppHeader } from '~/ui/components'

export function SempreEmCasaScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <AppHeader showBackButton title='Sempre em Casa' />,
    })
  }, [navigation])

  return (
    <WebView
      source={{ uri: 'https://sempreemcasa.com.br/collections/todos' }}
    />
  )
}
