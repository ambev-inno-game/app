import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { AppHeader } from '~/ui/components'
import { QuestionsScreen, NameScreen } from '~/ui/screens'
import { View } from 'react-native'

const Stack = createStackNavigator()

export function QuestionsStack() {
  return (
    <Stack.Navigator screenOptions={{ header: () => <View /> }}>
      <Stack.Screen component={QuestionsScreen} name='QuestionsScreen' />
      <Stack.Screen component={NameScreen} name='NameScreen' />
    </Stack.Navigator>
  )
}
