import React, { useLayoutEffect } from 'react'
import { View, Image, ScrollView } from 'react-native'

import { BBText, AppHeader } from '~/ui/components'

import styles from './styles'

import { useSelector } from 'react-redux'

const defaultImageLink =
  'https://hackathon-assinatura-ambev.s3.us-east-2.amazonaws.com/onboarding+2.png'

export function ProfileScreen({ navigation }) {
  const { name } = useSelector((state) => state.user)

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <AppHeader title='Perfil' />,
    })
  }, [navigation])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: defaultImageLink }} style={styles.image} />
        <BBText style={styles.name} size={25} type='secondary-bold'>
          Olá, {name}
        </BBText>
      </View>
    </ScrollView>
  )
}
