import React, { useState, useRef } from 'react'
import { View, Dimensions, Image, ScrollView } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { useDispatch } from 'react-redux'

import { COLORS } from '~/res'
import { NavigationService } from '~/services'
import * as authActions from '~/store/modules/auth/actions'
import { Button, BBText, Link } from '~/ui/components'

import { CarouselSteps } from './components'
import styles from './styles'

const images = [
  'http://lorempixel.com/g/300/310/food',
  'http://lorempixel.com/g/300/310/sports',
  'http://lorempixel.com/g/300/310/',
]

const { width } = Dimensions.get('window')

export function LandingScreen() {
  const dispatch = useDispatch()
  const carouselRef = useRef()

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  function handleSnapToItemEvent(i) {
    setCurrentSlideIndex(i)
  }

  function skip() {
    NavigationService.pushReplacement({ screen: 'AuthStack' })
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
            <Image source={{ uri: item }} style={styles.image} />
            <View>
              <BBText
                numberOfLines={1}
                size={20}
                style={styles.carouselTitle}
                type='secondary-bold'
              >
                Mussum Ipsum, cacilds vidis
              </BBText>
              <BBText size={16} style={styles.carouselSubtitle}>
                Mussum Ipsum, cacilds vidis litro abertis. Mais vale um bebadis
                conhecidiss, que um alcoolatra anonimis.
              </BBText>
            </View>
          </ScrollView>
        )}
        sliderWidth={width}
        onSnapToItem={(i) => handleSnapToItemEvent(i)}
      />
      <View style={styles.buttonContainer}>
        <Button onPress={next}>Avançar</Button>
        <Link onPress={skip}>Pular tutorial</Link>
      </View>
    </View>
  )
}
