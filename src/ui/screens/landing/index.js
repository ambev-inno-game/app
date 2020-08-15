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
  {
    image: 'http://lorempixel.com/g/300/310/food',
    title: 'Aprenda a reciclar',
    text: 'Material didático e dicas para você virar um expert na reciclagem',
  },
  {
    image: 'http://lorempixel.com/g/300/310/sports',
    title: 'Veja seu impacto',
    text:
      'Acompanhe a sua evolução, entenda o valor das pequenas atitudes e ganhe cupons e brindes!',
  },
  {
    image: 'http://lorempixel.com/g/300/310/',
    title: 'Faça a diferença',
    text:
      'Acompanhe a sua evolução, entenda o valor das pequenas atitudes e ganhe cupons e brindes!',
  },
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
    if (currentSlideIndex + 1 < images.length) {
      carouselRef.current.snapToNext()
    } else {
      skip()
    }
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
            <Image source={{ uri: item.image }} style={styles.image} />
            <View>
              <BBText
                color={COLORS.CORNFLOWER_BLUE}
                numberOfLines={1}
                size={20}
                style={styles.carouselTitle}
                type='secondary-bold'
              >
                {item.title}
              </BBText>
              <BBText size={16} style={styles.carouselSubtitle}>
                {item.text}
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
