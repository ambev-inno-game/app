/* eslint-disable react/style-prop-object */
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { StatusBar } from 'expo-status-bar'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { NavigationService } from '~/services'
import { LandingScreen, QuestionsScreen } from '~/ui/screens'
import { FaqStack, HomeStack, ProfileStack, AuthStack } from '~/ui/stacks'

const Stack = createStackNavigator()

const Drawer = createDrawerNavigator()

export function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName='HomeScreen'>
      <Drawer.Screen component={HomeStack} name='HomeStack' />
      <Drawer.Screen component={FaqStack} name='FaqStack' />
      <Drawer.Screen component={ProfileStack} name='ProfileStack' />
    </Drawer.Navigator>
  )
}

function App() {
  const { isLoggedIn, hasReadTutorial } = useSelector((state) => state.auth)

  const initialRouteName = useMemo(() => {
    if (isLoggedIn) {
      return 'DrawerNavigation'
    }

    if (hasReadTutorial) {
      return 'AuthStack'
    }

    return 'LandingScreen'
  }, [isLoggedIn, hasReadTutorial])

  return (
    <NavigationContainer
      ref={(navigator) => NavigationService.setNavigator({ navigator })}
    >
      <StatusBar style='auto' />
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen component={LandingScreen} name='LandingScreen' />
        <Stack.Screen component={QuestionsScreen} name='QuestionsScreen' />
        <Stack.Screen component={DrawerNavigation} name='DrawerNavigation' />
        <Stack.Screen component={AuthStack} name='AuthStack' />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App