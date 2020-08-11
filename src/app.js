/* eslint-disable react/style-prop-object */
import React from 'react'

import { StatusBar } from 'expo-status-bar'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { NavigationService } from '~/services'
import { LandingScreen, QuestionsScreen } from '~/ui/screens'
import {
  FaqStack,
  HomeStack,
  ProfileStack,
  MyBoxStack,
  BadgeStack,
} from '~/ui/stacks'

const Stack = createStackNavigator()

const Drawer = createDrawerNavigator()

export function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName='HomeScreen'>
      <Drawer.Screen
        component={ProfileStack}
        name='ProfileStack'
        options={{ drawerLabel: 'Perfil' }}
      />
      <Drawer.Screen
        component={HomeStack}
        name='HomeStack'
        options={{ drawerLabel: 'Início' }}
      />
      <Drawer.Screen
        component={FaqStack}
        name='FaqStack'
        options={{ drawerLabel: 'FAQ' }}
      />
      <Drawer.Screen
        component={MyBoxStack}
        name='MyBoxStack'
        options={{ drawerLabel: 'Meu Box' }}
      />
      <Drawer.Screen
        component={BadgeStack}
        name='BadgeStack'
        options={{ drawerLabel: 'Meus Pontos' }}
      />
    </Drawer.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer
      ref={(navigator) => NavigationService.setNavigator({ navigator })}
    >
      <StatusBar style='auto' />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={LandingScreen} name='LandingScreen' />
        <Stack.Screen component={QuestionsScreen} name='QuestionsScreen' />
        <Stack.Screen component={DrawerNavigation} name='DrawerNavigation' />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
