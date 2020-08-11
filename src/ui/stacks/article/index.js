import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { AppHeader } from '~/ui/components'
import { ArticleScreen } from '~/ui/screens'

const Stack = createStackNavigator()

export function ArticleStack() {
  return (
    <Stack.Navigator screenOptions={{ header: () => <AppHeader /> }}>
      <Stack.Screen component={ArticleScreen} name='ArticleScreen' />
    </Stack.Navigator>
  )
}
