import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { AppHeader } from '~/ui/components'
import { CollectionPointScreen } from '~/ui/screens'

const Stack = createStackNavigator()

export function CollectionPointStack() {
  return (
    <Stack.Navigator screenOptions={{ header: () => <AppHeader /> }}>
      <Stack.Screen
        component={CollectionPointScreen}
        name='CollectionPointStack'
      />
    </Stack.Navigator>
  )
}
