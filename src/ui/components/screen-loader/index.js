import React from 'react'
import { ActivityIndicator, View } from 'react-native'

import { COLORS } from '~/res'

import styles from './styles'

export function ScreenLoader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={COLORS.BLACK} size='large' />
    </View>
  )
}
