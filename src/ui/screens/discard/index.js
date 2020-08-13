import React from 'react'
import { StyleSheet, View } from 'react-native'

import { BBText } from '~/ui/components'

export function DiscardScreen() {
  return (
    <View style={styles.container}>
      <BBText size={20} type='secondary-bold'>
        Dicas para você descartar os seus produtos da forma correta.
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
