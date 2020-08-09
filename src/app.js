import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { StatusBar } from 'expo-status-bar'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import { NavigationService } from '~/services'
import * as authActions from '~/store/modules/auth/actions'
import { HomeStack, ProfileStack, FaqStack } from '~/ui/stacks'

const Drawer = createDrawerNavigator()

function App() {
  const disptach = useDispatch()

  return (
    <NavigationContainer
      ref={(navigator) => NavigationService.setNavigator({ navigator })}
    >
      <StatusBar style='auto' />
      <Drawer.Navigator initialRouteName='HomeScreen'>
        <Drawer.Screen component={HomeStack} name='HomeStack' />
        <Drawer.Screen component={FaqStack} name='FaqStack' />
        <Drawer.Screen component={ProfileStack} name='ProfileStack' />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App
