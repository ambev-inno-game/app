import React from 'react'
import { StyleSheet, View } from 'react-native'

import { StatusBar } from 'expo-status-bar'

import { BBText } from '~/ui/components'

export function FaqScreen() {
  return (
    <View style={styles.container}>
      <BBText size={20} type='secondary-bold'>
        Perguntas frequentes e acesso a nossa central de atendimento.
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
