import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { AppHeader } from '~/ui/components'
import {
  HomeScreen,
  SempreEmCasaScreen,
  QrCodeScreen,
  CollectionPointScreen,
  BadgeScreen,
  GiftsScreen,
  QrCodeReagingSuccessScreen,
} from '~/ui/screens'

const Stack = createStackNavigator()

export function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ header: () => <AppHeader /> }}>
      <Stack.Screen component={HomeScreen} name='HomeScreen' />
      <Stack.Screen component={SempreEmCasaScreen} name='SempreEmCasaScreen' />
      <Stack.Screen
        component={QrCodeScreen}
        name='QrCodeScreen'
        options={{
          header: () => <AppHeader showBackButton title='Realizar Descarte' />,
        }}
      />
      <Stack.Screen
        component={CollectionPointScreen}
        name='CollectionPointScreen'
        options={{
          header: () => <AppHeader showBackButton title='Pontos de Coleta' />,
        }}
      />
      <Stack.Screen
        component={BadgeScreen}
        name='BadgeScreen'
        options={{
          header: () => <AppHeader showBackButton title='Seus Pontos' />,
        }}
      />
      <Stack.Screen component={GiftsScreen} name='GiftsScreen' />
      <Stack.Screen
        component={QrCodeReagingSuccessScreen}
        name='QrCodeReagingSuccessScreen'
      />
    </Stack.Navigator>
  )
}
