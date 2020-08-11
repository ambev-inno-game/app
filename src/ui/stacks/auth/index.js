import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { LoginScreen } from '~/ui/screens'

const Stack = createStackNavigator()

export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={LoginScreen} name='LoginScreen' />
    </Stack.Navigator>
  )
}
