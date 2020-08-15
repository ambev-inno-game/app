import React from 'react'
import { View } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'

import { AppHeader } from '~/ui/components'
import { QuestionsScreen, NameScreen } from '~/ui/screens'

const Stack = createStackNavigator()

export function QuestionsStack() {
  return (
    <Stack.Navigator screenOptions={{ header: () => <View /> }}>
      <Stack.Screen component={NameScreen} name='NameScreen' />
      <Stack.Screen component={QuestionsScreen} name='QuestionsScreen' />
    </Stack.Navigator>
  )
}
