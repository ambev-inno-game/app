import React, { useLayoutEffect } from 'react'
import { View } from 'react-native'

import { NavigationService } from '~/services'
import { Button, BBText } from '~/ui/components'
import { AntDesign } from '@expo/vector-icons'

import styles from './styles'

export function DevelopmentScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: true, title: '', headerStyle: { elevation: 0, shadowOpacity: 0 } })
  }, [])

  return (
    <View style={styles.container}>
      <AntDesign name='meh' size={70} color='grey' />
      <BBText size={35}>OPS!</BBText>
      <BBText size={20}>Tela em desenvolvimento.</BBText>
    </View>
  )
}
