import React, { useEffect } from 'react'
import { ScrollView, Image, TouchableOpacity } from 'react-native'

import { LoaderService, NavigationService } from '~/services'

import styles from './styles'

const images = [
  {
    image: 'http://lorempixel.com/g/300/310/',
    screen: 'QrCodeScreen',
  },
  {
    image: 'http://lorempixel.com/g/300/310/sports',
    screen: 'CollectionPointScreen',
  },
  {
    image: 'http://lorempixel.com/g/300/310/',
    screen: 'GiftsScreen',
  },
]

export function HomeScreen() {
  useEffect(() => {
    async function getHomeData() {
      LoaderService.show()
      // const homeData = await HomeApiService.getHomePage()

      // setData(homeData)
      LoaderService.hide()
    }

    getHomeData()
  }, [])

  function onBanner(value) {
    NavigationService.navigate({ screen: value })
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={{ marginHorizontal: 7 }}
        onPress={() => onBanner('SempreEmCasaScreen')}
      >
        <Image
          source={{ uri: 'http://lorempixel.com/g/300/310/food' }}
          style={styles.image}
        />
      </TouchableOpacity>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {images.map((item) => {
          return (
            <TouchableOpacity
              style={{ marginHorizontal: 7 }}
              onPress={() => onBanner(item.screen)}
            >
              <Image source={{ uri: item.image }} style={styles.scrollImage} />
            </TouchableOpacity>
          )
        })}
      </ScrollView>
      <TouchableOpacity
        style={{ marginHorizontal: 7 }}
        onPress={() => onBanner('ArticleScreen')}
      >
        <Image
          source={{ uri: 'http://lorempixel.com/g/300/310/sports' }}
          style={styles.image}
        />
      </TouchableOpacity>
    </ScrollView>
  )
}
