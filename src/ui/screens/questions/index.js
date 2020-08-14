import React, { useState, useRef } from 'react'
import { View, Dimensions, Image, ScrollView } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { useDispatch } from 'react-redux'

import { COLORS } from '~/res'
import { NavigationService } from '~/services'
import * as authActions from '~/store/modules/auth/actions'
import { Button, BBText, CarouselSteps } from '~/ui/components'

import styles from './styles'

const images = [
  'http://lorempixel.com/g/300/310/food',
  'http://lorempixel.com/g/300/310/sports',
  'http://lorempixel.com/g/300/310/',
]

const data = [
  {
    id: 1,
    title: 'Nos conte mais',
    question:
      'O que você costuma consumir? Quais são suas compras normalmente? Selecione mais de um item.',
    options: [
      {
        id: 1,
        image: 'http://lorempixel.com/g/100/120/food',
      },
      {
        id: 2,
        image: 'http://lorempixel.com/g/100/120/sports',
      },
      {
        id: 3,
        image: 'http://lorempixel.com/g/100/120/',
      },
      {
        id: 4,
        image: 'http://lorempixel.com/g/100/120/food',
      },
      {
        id: 5,
        image: 'http://lorempixel.com/g/100/120/sports',
      },
      {
        id: 6,
        image: 'http://lorempixel.com/g/100/120',
      },
      {
        id: 7,
        image: 'http://lorempixel.com/g/100/120/food',
      },
      {
        id: 8,
        image: 'http://lorempixel.com/g/100/120/sports',
      },
      {
        id: 9,
        image: 'http://lorempixel.com/g/100/120',
      },
    ],
  },
  {
    id: 2,
    title: 'Quase lá...',
    question:
      'O que você gosta de fazer? Quais são seus hábitos de passatempo ou lazer? Selecione mais de um item.',
    options: [
      {
        id: 1,
        image: 'http://lorempixel.com/g/100/120/food',
      },
      {
        id: 2,
        image: 'http://lorempixel.com/g/100/120/sports',
      },
      {
        id: 3,
        image: 'http://lorempixel.com/g/100/120/',
      },
      {
        id: 4,
        image: 'http://lorempixel.com/g/100/120/food',
      },
      {
        id: 5,
        image: 'http://lorempixel.com/g/100/120/sports',
      },
      {
        id: 6,
        image: 'http://lorempixel.com/g/100/120',
      },
      {
        id: 7,
        image: 'http://lorempixel.com/g/100/120/food',
      },
      {
        id: 8,
        image: 'http://lorempixel.com/g/100/120/sports',
      },
      {
        id: 9,
        image: 'http://lorempixel.com/g/100/120',
      },
    ],
  },
  {
    id: 3,
    title: 'Agora é a última',
    question: 'Bebida para quantos',
    options: [
      {
        id: 1,
        image: 'http://lorempixel.com/g/100/120/food',
      },
      {
        id: 2,
        image: 'http://lorempixel.com/g/100/120/sports',
      },
      {
        id: 3,
        image: 'http://lorempixel.com/g/100/120/',
      },
      {
        id: 4,
        image: 'http://lorempixel.com/g/100/120/food',
      },
      {
        id: 5,
        image: 'http://lorempixel.com/g/100/120/sports',
      },
      {
        id: 6,
        image: 'http://lorempixel.com/g/100/120',
      },
      {
        id: 7,
        image: 'http://lorempixel.com/g/100/120/food',
      },
      {
        id: 8,
        image: 'http://lorempixel.com/g/100/120/sports',
      },
      {
        id: 9,
        image: 'http://lorempixel.com/g/100/120',
      },
    ],
  },
]

const { width, height } = Dimensions.get('window')

export function QuestionsScreen() {
  const dispatch = useDispatch()
  const carouselRef = useRef()
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  function handleSnapToItemEvent(i) {
    setCurrentSlideIndex(i)
  }

  function concludeForm() {
    NavigationService.pushReplacement({ screen: 'DrawerNavigation' })
  }

  function next() {
    carouselRef.current.snapToNext()
  }

  function renderCarouselSteps() {
    return (
      <CarouselSteps
        numberOfSteps={data.length}
        selectedStep={currentSlideIndex}
      />
    )
  }

  function renderCards(value) {
    return value.options.map((item) => {
      return <Image source={{ uri: item.image }} style={styles.image} />
    })
  }

  function renderButton() {
    if (currentSlideIndex + 1 === data.length) {
      return (
        <View style={styles.buttonContainer}>
          <Button onPress={concludeForm}>Concluir</Button>
        </View>
      )
    }
    return (
      <View style={styles.buttonContainer}>
        <Button onPress={next}>Avançar</Button>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {renderCarouselSteps()}
      <Carousel
        data={data}
        inactiveSlideScale={1}
        itemHeight={height - 200}
        itemWidth={width}
        ref={carouselRef}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <View style={styles.textContainer}>
              <BBText size={23} style={styles.title} type='secondary-bold'>
                {item.title}
              </BBText>
              <BBText size={17} style={styles.subtitle}>
                {item.question}
              </BBText>
            </View>
            <View style={styles.imageContainer}>{renderCards(item)}</View>
          </View>
        )}
        sliderWidth={width}
        onSnapToItem={(i) => handleSnapToItemEvent(i)}
      />
      {renderButton()}
    </View>
  )
}
