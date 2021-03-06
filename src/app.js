/* eslint-disable react/style-prop-object */
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { StatusBar } from 'expo-status-bar'

import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'
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
  BadgeStack,
  ArticleStack,
  CollectionPointStack,
  QuestionsStack,
  QrCodeStack,
} from '~/ui/stacks'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

export function DrawerNavigation() {
  function renderIcon(name) {
    return <AntDesign name={name} size={23} />
  }

  return (
    <Drawer.Navigator initialRouteName='HomeStack'>
      <Drawer.Screen
        component={HomeStack}
        name='HomeStack'
        options={{
          drawerLabel: 'Início',
          drawerIcon: () => renderIcon('home'),
        }}
      />
      <Drawer.Screen
        component={ProfileStack}
        name='ProfileStack'
        options={{
          drawerLabel: 'Perfil',
          drawerIcon: () => renderIcon('user'),
        }}
      />
      <Drawer.Screen
        component={BadgeStack}
        name='BadgeStack'
        options={{
          drawerLabel: 'Seus Pontos',
          drawerIcon: () => renderIcon('rocket1'),
        }}
      />
      <Drawer.Screen
        component={CollectionPointStack}
        name='CollectionPointStack'
        options={{
          drawerLabel: 'Pontos de Coleta',
          drawerIcon: () => <SimpleLineIcons name='location-pin' size={23} />,
        }}
      />
      <Drawer.Screen
        component={QrCodeStack}
        name='QrCodeStack'
        options={{
          drawerLabel: 'Realizar Descarte',
          drawerIcon: () => renderIcon('qrcode'),
        }}
      />
      <Drawer.Screen
        component={FaqStack}
        name='FaqStack'
        options={{
          drawerLabel: 'FAQ',
          drawerIcon: () => renderIcon('customerservice'),
        }}
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
