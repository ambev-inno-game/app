import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { AppHeader } from '~/ui/components'
import {
  HomeScreen,
  SempreEmCasaScreen,
  QrCodeScreen,
  CollectionPointScreen,
  GiftsScreen,
  ArticleScreen,
} from '~/ui/screens'

const Stack = createStackNavigator()

export function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ header: () => <AppHeader /> }}>
      <Stack.Screen component={HomeScreen} name='HomeScreen' />
      <Stack.Screen component={SempreEmCasaScreen} name='SempreEmCasaScreen' />
      <Stack.Screen component={QrCodeScreen} name='QrCodeScreen' />
      <Stack.Screen
        component={CollectionPointScreen}
        name='CollectionPointScreen'
      />
      <Stack.Screen component={GiftsScreen} name='GiftsScreen' />
      <Stack.Screen component={ArticleScreen} name='ArticleScreen' />
    </Stack.Navigator>
  )
}
