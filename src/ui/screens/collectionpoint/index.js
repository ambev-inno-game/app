import React from 'react'
import { StyleSheet, View } from 'react-native'

import { StatusBar } from 'expo-status-bar'

import { BBText } from '~/ui/components'

export function CollectionPointScreen() {
  return (
    <View style={styles.container}>
      <BBText size={20} type='secondary-bold'>
        Mapa com os pontos de coleta próximos a você
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
