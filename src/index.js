import * as React from 'react'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import { NavigationService } from '~/services'
import { store, persistor } from '~/store'
import { HomeStack, ProfileStack, FaqStack } from '~/ui/stacks'

const Drawer = createDrawerNavigator()

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer
          ref={(navigator) => NavigationService.setNavigator({ navigator })}
        >
          <Drawer.Navigator initialRouteName='HomeScreen'>
            <Drawer.Screen component={HomeStack} name='HomeStack' />
            <Drawer.Screen component={FaqStack} name='FaqStack' />
            <Drawer.Screen component={ProfileStack} name='ProfileStack' />
          </Drawer.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App
