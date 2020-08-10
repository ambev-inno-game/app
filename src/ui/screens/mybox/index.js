import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { StatusBar } from 'expo-status-bar'

export function MyBoxScreen() {
  return (
    <View style={styles.container}>
      <Text>My Box</Text>
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
