import React from 'react'
import { View, Image } from 'react-native'

import { BBText } from '~/ui/components'

import styles from './styles'

import { useSelector } from 'react-redux'

const defaultImageLink =
  'https://hackathon-assinatura-ambev.s3.us-east-2.amazonaws.com/onboarding+2.png'

export function ProfileScreen() {
  const { name } = useSelector((state) => state.user)

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: defaultImageLink }} style={styles.image} />
        <BBText size={20} type='secondary-bold'>
          Olá, {name}
        </BBText>
      </View>
    </View>
  )
}
