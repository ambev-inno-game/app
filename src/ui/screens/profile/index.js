import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { StatusBar } from 'expo-status-bar'

export function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>PROFILE</Text>
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
