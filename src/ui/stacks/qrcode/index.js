import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { AppHeader } from '~/ui/components'
import {
  QrCodeScreen,
  QrCodeReagingSuccessScreen,
  QrCodeTutorialScreen,
} from '~/ui/screens'

const Stack = createStackNavigator()

export function QrCodeStack() {
  return (
    <Stack.Navigator screenOptions={{ header: () => <AppHeader /> }}>
      <Stack.Screen
        component={QrCodeTutorialScreen}
        name='QrCodeTutorialScreen'
        options={{
          header: () => <AppHeader title='Realizar Descarte' />,
        }}
      />
      <Stack.Screen component={QrCodeScreen} name='QrCodeScreen' />
      <Stack.Screen
        component={QrCodeReagingSuccessScreen}
        name='QrCodeReagingSuccessScreen'
      />
    </Stack.Navigator>
  )
}
