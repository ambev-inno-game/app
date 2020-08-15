import React, { useState, useRef, useEffect, useMemo } from 'react'
import {
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { useDispatch } from 'react-redux'

import { COLORS } from '~/res'
import {
  NavigationService,
  QuestionsApiService,
  ToastService,
} from '~/services'
import * as authActions from '~/store/modules/auth/actions'
import { Button, BBText, CarouselSteps } from '~/ui/components'

import styles from './styles'

const { width, height } = Dimensions.get('window')

const responsesModel = [{ responses: [] }, { responses: [] }]

export function QuestionsScreen({ route }) {
  const { params } = route

  const dispatch = useDispatch()
  const carouselRef = useRef()
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [selectedResponses, setSelectedResponses] = useState(responsesModel)
  const [questions, setQuestions] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function getQuestions() {
      setIsLoading(true)
      const questionsResp = await QuestionsApiService.getInitialQuestions()
      setQuestions(questionsResp)
      setIsLoading(false)
    }

    getQuestions()
  }, [])

  function handleSnapToItemEvent(i) {
    setCurrentSlideIndex(i)
  }

  function concludeForm() {
    const hasAnsweredAllQuestions =
      selectedResponses.filter(({ responses }) => responses.length > 0)
        .length === questions.length

    console.tron.log(hasAnsweredAllQuestions)

    if (hasAnsweredAllQuestions) {
      dispatch(authActions.leadLogin({ name: params.name }))
      NavigationService.pushReplacement({ screen: 'DrawerNavigation' })
    } else {
      ToastService.show({
        message: 'Ops. Você precisa responder todas as perguntas!',
      })
    }
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
        numberOfSteps={questions.length}
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
    if (currentSlideIndex + 1 === questions.length) {
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

  function renderContent() {
    if (isLoading) {
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator color={COLORS.BLACK} size='large' />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        {renderCarouselSteps()}
        <Carousel
          data={questions}
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

  return renderContent()
}
