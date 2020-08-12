import React from 'react'
import { StyleSheet, View } from 'react-native'

import { NavigationService } from '~/services'
import { StatusBar } from 'expo-status-bar'

import { BBText, Button } from '~/ui/components'

export function NameScreen() {
  return (
    <View style={styles.container}>
      <BBText>Name Screen</BBText>
      <Button
        onPress={() => {
          NavigationService.pushReplacement({ screen: 'DrawerNavigation' })
        }}
      >
        IR PARA O APP
      </Button>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
