import React, { useLayoutEffect } from 'react'
import { StyleSheet, View } from 'react-native'

import { StatusBar } from 'expo-status-bar'

import { BBText, AppHeader } from '~/ui/components'

export function ProfileScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <AppHeader title='Perfil' />,
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      <BBText size={20} type='secondary-bold'>
        Nesta tela você terá acesso aos seus dados cadastrais.
      </BBText>
      <StatusBar style='auto' />
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
