import React from 'react'
import { StyleSheet, View } from 'react-native'

import { StatusBar } from 'expo-status-bar'

import { BBText } from '~/ui/components'

export function BadgeScreen() {
  return (
    <View style={styles.container}>
      <BBText size={20} type='secondary-bold'>
        Seus pontos e seu avanço na gameficação da nossa aplicação.
      </BBText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 30,
  },
})
