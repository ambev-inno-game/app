import React from 'react'
import { View, ScrollView, TouchableOpacity } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

import { COLORS } from '~/res'
import { NavigationService } from '~/services'
import { BBText } from '~/ui/components'

import { ProgressList } from './components'
import styles from './styles'

const userTransactions = [
  {
    date: '01/08/2020',
    title: 'Compra',
    points: '1.635',
    id: 1,
  },
  {
    date: '05/08/2020',
    title: 'Reciclagem',
    points: '3.800',
    id: 2,
  },
  {
    date: '01/07/2020',
    title: 'Reciclagem',
    points: '1.800',
    id: 3,
  },
  {
    date: '12/06/2020',
    title: 'Compra',
    points: '2.455',
    id: 7,
  },
  {
    date: '01/05/2020',
    title: 'Reciclagem',
    points: '4.200',
    id: 4,
  },
  {
    date: '21/04/2020',
    title: 'Compra',
    points: '820',
    id: 5,
  },
  {
    date: '28/03/2020',
    title: 'Reciclagem',
    points: '1.400',
    id: 6,
  },
  {
    date: '27/03/2020',
    title: 'Compra',
    points: '1.630',
    id: 8,
  },
  {
    date: '01/02/2020',
    title: 'Reciclagem',
    points: '2.800',
    id: 9,
  },
]

export function BadgeScreen() {
  function renderTitle() {
    return (
      <View>
        <BBText size={16}>Você está com</BBText>
        <BBText color={COLORS.CORNFLOWER_BLUE} size={22} type='secondary-bold'>
          20.540 pontos
        </BBText>
      </View>
    )
  }

  function goToGiftsScreen() {
    NavigationService.navigate({ screen: 'GiftsScreen' })
  }

  function renderMainCard() {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.card}
        onPress={goToGiftsScreen}
      >
        <View>
          <BBText
            color={COLORS.CORNFLOWER_BLUE}
            size={16}
            type='secondary-bold'
          >
            Seus pontos valem muito!
          </BBText>
          <BBText size={16}>Resgate agora e aproveite</BBText>
        </View>
        <MaterialIcons
          color={COLORS.CORNFLOWER_BLUE}
          name='keyboard-arrow-right'
          size={40}
        />
      </TouchableOpacity>
    )
  }

  function renderUserProgress() {
    return <ProgressList data={userTransactions} />
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {renderTitle()}
      {renderMainCard()}
      <View>
        <BBText color={COLORS.CORNFLOWER_BLUE} size={22} type='secondary-bold'>
          Seu progesso
        </BBText>
        {renderUserProgress()}
      </View>
    </ScrollView>
  )
}
