import * as React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { HomeStack, ProfileStack, FaqStack } from '~/ui/stacks'
import { NavigationService } from '~/services'
import { store, persistor } from '~/store'

const Drawer = createDrawerNavigator()

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer
          ref={(navigator) => NavigationService.setNavigator({ navigator })}
        >
          <Drawer.Navigator initialRouteName='HomeScreen'>
            <Drawer.Screen name='HomeStack' component={HomeStack} />
            <Drawer.Screen name='FaqStack' component={FaqStack} />
            <Drawer.Screen name='ProfileStack' component={ProfileStack} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App
