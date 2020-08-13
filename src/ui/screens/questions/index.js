import React, { useState, useRef } from 'react'
import { View, Dimensions, Image, ScrollView } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { useDispatch } from 'react-redux'

import { COLORS } from '~/res'
import { NavigationService } from '~/services'
import * as authActions from '~/store/modules/auth/actions'
import { Button, BBText, Link, CarouselSteps } from '~/ui/components'

import styles from './styles'

const images = [
  'http://lorempixel.com/g/300/310/food',
  'http://lorempixel.com/g/300/310/sports',
  'http://lorempixel.com/g/300/310/',
]

const { width } = Dimensions.get('window')

export function QuestionsScreen() {
  const dispatch = useDispatch()
  const carouselRef = useRef()

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  function handleSnapToItemEvent(i) {
    setCurrentSlideIndex(i)
  }

  function concludeForm() {
    NavigationService.pushReplacement({ screen: 'DrawerNavigation' })
    dispatch(authActions.setHasReadTutorial(true))
  }

  function next() {
    carouselRef.current.snapToNext()
  }

  function renderCarouselSteps() {
    return (
      <CarouselSteps
        numberOfSteps={images.length}
        selectedStep={currentSlideIndex}
      />
    )
  }

  return (
    <View style={styles.container}>
      {renderCarouselSteps()}
      <Carousel
        data={images}
        inactiveSlideScale={1}
        itemWidth={width}
        ref={carouselRef}
        renderItem={({ item }) => (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollView}
          >
            <BBText size={23} style={styles.title} type='secondary-bold'>
              Nos conte mais
            </BBText>
            <BBText size={17} style={styles.subtitle}>
              O que você costuma consumir? Quais são suas compras normalmente?
              Selecione mais de um item.
            </BBText>
            <Image source={{ uri: item }} style={styles.image} />
          </ScrollView>
        )}
        sliderWidth={width}
        onSnapToItem={(i) => handleSnapToItemEvent(i)}
      />
      <View style={styles.buttonContainer}>
        <Button onPress={next}>Avançar</Button>
      </View>
    </View>
  )
}
