import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { AppHeader } from '~/ui/components'
import { MyBoxScreen } from '~/ui/screens'

const Stack = createStackNavigator()

export function MyBoxStack() {
  return (
    <Stack.Navigator screenOptions={{ header: () => <AppHeader /> }}>
      <Stack.Screen component={MyBoxScreen} name='MyBoxScreen' />
    </Stack.Navigator>
  )
}
