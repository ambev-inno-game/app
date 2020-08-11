import React from 'react'
import { StyleSheet, View } from 'react-native'

import { StatusBar } from 'expo-status-bar'

import { BBText } from '~/ui/components'

export function BadgeScreen() {
  return (
    <View style={styles.container}>
      <BBText>Badge Screen</BBText>
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
