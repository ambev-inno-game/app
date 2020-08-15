import React, { useState, useRef, useEffect, useMemo } from 'react'
import {
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import Carousel from 'react-native-snap-carousel'

import { NavigationService, QuestionsApiService } from '~/services'
import { Button, BBText, CarouselSteps } from '~/ui/components'

import styles from './styles'

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
        id: 10,
        image: 'http://lorempixel.com/g/100/120/food',
      },
      {
        id: 11,
        image: 'http://lorempixel.com/g/100/120/sports',
      },
      {
        id: 12,
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

const responsesModel = [{ responses: [] }, { responses: [] }, { responses: [] }]

export function QuestionsScreen() {
  const carouselRef = useRef()
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [selectedResponses, setSelectedResponses] = useState(responsesModel)
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    async function getQuestions() {
      const questionsResp = await QuestionsApiService.getInitialQuestions()

      console.tron.log(questionsResp)

      setQuestions(questionsResp)
    }

    getQuestions()
  }, [])

  function handleSnapToItemEvent(i) {
    setCurrentSlideIndex(i)
  }

  function concludeForm() {
    NavigationService.pushReplacement({ screen: 'DrawerNavigation' })
  }

  function next() {
    carouselRef.current.snapToNext()
  }

  const currentResponses = useMemo(() => {
    return selectedResponses[currentSlideIndex].responses
  }, [currentSlideIndex, selectedResponses])

  function renderCarouselSteps() {
    return (
      <CarouselSteps
        numberOfSteps={data.length}
        selectedStep={currentSlideIndex}
      />
    )
  }

  function onCardPress(id) {
    const index = currentResponses.findIndex((itemId) => itemId === id)

    if (index >= 0) {
      const respsCopy = [...currentResponses]
      const selectedResponsesCopy = [...selectedResponses]
      respsCopy.splice(index, 1)

      selectedResponsesCopy[currentSlideIndex].responses = respsCopy

      setSelectedResponses(selectedResponsesCopy)
    } else {
      const selectedResponsesCopy = [...selectedResponses]

      selectedResponsesCopy[currentSlideIndex].responses = [
        ...currentResponses,
        id,
      ]

      setSelectedResponses(selectedResponsesCopy)
    }
  }

  function renderCards(value) {
    return value.options.map((item) => {
      const isSelected =
        currentResponses.find((itemId) => itemId === item.id) !== undefined
      return (
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.touchableImage, isSelected && { borderColor: 'red' }]}
          onPress={() => onCardPress(item.id)}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </TouchableOpacity>
      )
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
        itemHeight={height}
        itemWidth={width}
        ref={carouselRef}
        renderItem={({ item }) => (
          <ScrollView contentContainerStyle={styles.cardContainer}>
            <View style={styles.textContainer}>
              <BBText size={23} style={styles.title} type='secondary-bold'>
                {item.title}
              </BBText>
              <BBText size={17} style={styles.subtitle}>
                {item.question}
              </BBText>
            </View>
            <View style={styles.imageContainer}>{renderCards(item)}</View>
          </ScrollView>
        )}
        sliderWidth={width}
        onSnapToItem={(i) => handleSnapToItemEvent(i)}
      />
      {renderButton()}
    </View>
  )
}
