/* eslint-disable react/style-prop-object */
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { StatusBar } from 'expo-status-bar'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { NavigationService } from '~/services'
import { LandingScreen, DevelopmentScreen } from '~/ui/screens'
import {
  FaqStack,
  HomeStack,
  ProfileStack,
  AuthStack,
  MyBoxStack,
  BadgeStack,
  ArticleStack,
  DiscardStack,
  CollectionPointStack,
  QuestionsStack,
} from '~/ui/stacks'

const Stack = createStackNavigator()

const Drawer = createDrawerNavigator()

export function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName='HomeStack'>
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
      <Drawer.Screen
        component={ArticleStack}
        name='ArticleStack'
        options={{ drawerLabel: 'Ambev Recicla' }}
      />
      <Drawer.Screen
        component={DiscardStack}
        name='DiscardStack'
        options={{ drawerLabel: 'Descarte Bem' }}
      />
      <Drawer.Screen
        component={CollectionPointStack}
        name='CollectionPointStack'
        options={{ drawerLabel: 'Pontos de Coleta' }}
      />
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
        <Stack.Screen component={QuestionsStack} name='QuestionsStack' />
        <Stack.Screen component={DevelopmentScreen} name='DevelopmentScreen' />
        <Stack.Screen component={DrawerNavigation} name='DrawerNavigation' />
        <Stack.Screen component={AuthStack} name='AuthStack' />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
