import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'

import * as authActions from '~/store/modules/auth/actions'
import { Button } from '~/ui/components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
})

export function HomeScreen() {
  const dispatch = useDispatch()

  dispatch(authActions.example())

  return (
    <View style={styles.container}>
      <Text>HOME</Text>
      <Button onPress={() => console.log('teste')}>Teste</Button>
    </View>
  )
}
