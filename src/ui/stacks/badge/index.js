import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { AppHeader } from '~/ui/components'
import { BadgeScreen, GiftsScreen } from '~/ui/screens'

const Stack = createStackNavigator()

export function BadgeStack() {
  return (
    <Stack.Navigator screenOptions={{ header: () => <AppHeader /> }}>
      <Stack.Screen
        component={BadgeScreen}
        name='BadgeScreen'
        options={{
          header: () => <AppHeader title='Seus Pontos' />,
        }}
      />
      <Stack.Screen component={GiftsScreen} name='GiftsScreen' />
    </Stack.Navigator>
  )
}
