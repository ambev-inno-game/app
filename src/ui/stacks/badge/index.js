import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { AppHeader } from '~/ui/components'
import { BadgeScreen } from '~/ui/screens'

const Stack = createStackNavigator()

export function BadgeStack() {
  return (
    <Stack.Navigator screenOptions={{ header: () => <AppHeader /> }}>
      <Stack.Screen component={BadgeScreen} name='BadgeScreen' />
    </Stack.Navigator>
  )
}
