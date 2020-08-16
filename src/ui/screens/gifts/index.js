import React, { useLayoutEffect } from 'react'
import { View, ScrollView } from 'react-native'

import { COLORS } from '~/res'
import { BBText, AppHeader } from '~/ui/components'

import styles from './styles'

const gifts = [
  {
    title: 'Cupom petlove',
    discount: '15%\noff',
    cost: '12.300',
    id: 1,
  },
  {
    title: 'Cupom Steam',
    discount: '15%\noff',
    cost: '12.300',
    id: 2,
  },
  {
    title: 'Cupom Neshoes',
    discount: '10%\noff',
    cost: '12.300',
    id: 3,
  },
  {
    title: 'Cupom Zé Delivery',
    discount: '20%\noff',
    cost: '12.300',
    id: 4,
  },
  {
    title: 'Cupom Ri Happy',
    discount: '10%\noff',
    cost: '12.300',
    id: 5,
  },
  {
    title: 'Cupom Fortnite',
    discount: '5%\noff',
    cost: '12.300',
    id: 6,
  },
  {
    title: 'Cupom Wine',
    discount: '20%\noff',
    cost: '12.300',
    id: 7,
  },
]

export function GiftsScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <AppHeader showBackButton title='Seus Prêmios' />,
    })
  }, [navigation])

  function renderAvailableGifts() {
    return gifts.map((item) => {
      return (
        <View key={item.id} style={styles.card}>
          <View>
            <BBText uppercase size={15}>
              {item.title}
            </BBText>
            <BBText>{`${item.cost} pts`} </BBText>
          </View>
          <BBText
            uppercase
            color={COLORS.CORNFLOWER_BLUE}
            size={28}
            type='secondary-bold'
          >
            {item.discount}
          </BBText>
        </View>
      )
    })
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topContainer}>
        <BBText size={16}>Aproveite os seus pontos!</BBText>
        <BBText color={COLORS.CORNFLOWER_BLUE} size={22} type='secondary-bold'>
          Saldo: 20.547 pontos
        </BBText>
      </View>
      {renderAvailableGifts()}
    </ScrollView>
  )
}
