import React from 'react'
import { View, Dimensions, Image } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { useDispatch } from 'react-redux'

import { NavigationService } from '~/services'
import * as authActions from '~/store/modules/auth/actions'
import { Button } from '~/ui/components'

import styles from './styles'

const images = [
  'http://lorempixel.com/400/500/food',
  'http://lorempixel.com/400/500/sports',
  'http://lorempixel.com/400/500/',
]

const { width } = Dimensions.get('window')

export function LandingScreen() {
  const dispatch = useDispatch()

  function goToQuestions() {
    NavigationService.pushReplacement({ screen: 'AuthStack' })
    dispatch(authActions.setHasReadTutorial(true))
  }

  return (
    <View style={styles.container}>
      <Carousel
        data={images}
        inactiveSlideScale={0.8}
        itemWidth={width - 80}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
        sliderWidth={width}
      />
      <View style={styles.buttonContainer}>
        <Button onPress={goToQuestions}>Continuar</Button>
      </View>
    </View>
  )
}
