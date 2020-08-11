import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { AppHeader } from '~/ui/components'
import { DiscardScreen } from '~/ui/screens'

const Stack = createStackNavigator()

export function DiscardStack() {
  return (
    <Stack.Navigator screenOptions={{ header: () => <AppHeader /> }}>
      <Stack.Screen component={DiscardScreen} name='DiscardScreen' />
    </Stack.Navigator>
  )
}
