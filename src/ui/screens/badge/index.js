import React from 'react'
import { View, FlatList } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

import { BBText } from '~/ui/components'

import styles from './styles'

const userTransactions = [
  {
    date: '01/08/2020',
    title: 'Compra',
    points: '30',
  },
  {
    date: '01/08/2020',
    title: 'Compra',
    points: '30',
  },
  {
    date: '01/08/2020',
    title: 'Compra',
    points: '30',
  },
  {
    date: '01/08/2020',
    title: 'Compra',
    points: '30',
  },
  {
    date: '01/08/2020',
    title: 'Compra',
    points: '30',
  },
  {
    date: '01/08/2020',
    title: 'Compra',
    points: '30',
  },
  {
    date: '01/08/2020',
    title: 'Compra',
    points: '30',
  },
]

export function BadgeScreen() {
  function renderTitle() {
    return (
      <View>
        <BBText size={16}>Você está com</BBText>
        <BBText size={22} type='secondary-bold'>
          20.547 pontos
        </BBText>
      </View>
    )
  }

  function renderMainCard() {
    return (
      <View style={styles.card}>
        <View>
          <BBText size={16} type='secondary-bold'>
            Seus pontos valem muito!
          </BBText>
          <BBText size={16}>Resgate agora e aproveite</BBText>
        </View>
        <MaterialIcons name='keyboard-arrow-right' size={40} />
      </View>
    )
  }

  function renderUserProgress() {
    return (

    )
  }

  return (
    <View style={styles.container}>
      {renderTitle()}
      {renderMainCard()}
      <View>
        <BBText size={22} type='secondary-bold'>
          Seu progesso
        </BBText>
        {renderUserProgress()}
      </View>
    </View>
  )
}
