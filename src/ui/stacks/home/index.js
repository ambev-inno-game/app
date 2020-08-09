import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { AppHeader } from '~/ui/components'
import { HomeScreen } from '~/ui/screens'

const Stack = createStackNavigator()

export function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ header: () => <AppHeader /> }}>
      <Stack.Screen component={HomeScreen} name='HomeScreen' />
    </Stack.Navigator>
  )
}
