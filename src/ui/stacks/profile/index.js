import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { AppHeader } from '~/ui/components'
import { ProfileScreen } from '~/ui/screens'

const Stack = createStackNavigator()

export function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ header: () => <AppHeader /> }}>
      <Stack.Screen component={ProfileScreen} name='ProfileScreen' />
    </Stack.Navigator>
  )
}
