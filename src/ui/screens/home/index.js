import React, { useRef, useEffect, useState } from 'react'
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import Carousel from 'react-native-snap-carousel'

import { HomeApiService, LoaderService, NavigationService } from '~/services'
import { BBText } from '~/ui/components'

import styles from './styles'

/**
 * Sempre em casa
 *
 * QR code
 * Localizar
 * Trocar Pontos
 *
 * Ambev Recicla
 */

const { width } = Dimensions.get('window')
const images = [
  'http://lorempixel.com/g/300/310/food',
  'http://lorempixel.com/g/300/310/sports',
  'http://lorempixel.com/g/300/310/',
]

export function HomeScreen() {
  const [data, setData] = useState([])
  const carouselRef = useRef()

  useEffect(() => {
    async function getHomeData() {
      LoaderService.show()
      // const homeData = await HomeApiService.getHomePage()

      // setData(homeData)
      LoaderService.hide()
    }

    getHomeData()
  }, [])

  function onSempreEmCasaBanner() {
    NavigationService.navigate({ screen: 'SempreEmCasaScreen' })
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollView}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {images.map((item) => {
          return (
            <TouchableOpacity
              style={{ marginHorizontal: 7 }}
              onPress={() => onSempreEmCasaBanner()}
            >
              <Image source={{ uri: item }} style={styles.image} />
            </TouchableOpacity>
          )
        })}
      </ScrollView>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {images.map((item) => {
          return (
            <TouchableOpacity
              style={{ marginHorizontal: 7 }}
              onPress={() => onSempreEmCasaBanner()}
            >
              <Image source={{ uri: item }} style={styles.image} />
            </TouchableOpacity>
          )
        })}
      </ScrollView>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {images.map((item) => {
          return (
            <TouchableOpacity
              style={{ marginHorizontal: 7 }}
              onPress={() => onSempreEmCasaBanner()}
            >
              <Image source={{ uri: item }} style={styles.image} />
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </ScrollView>
  )
}
