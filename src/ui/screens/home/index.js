import React, { useEffect } from 'react'
import { ScrollView, Image, TouchableOpacity, View } from 'react-native'

import { COLORS } from '~/res'
import { LoaderService, NavigationService } from '~/services'
import { BBText } from '~/ui/components'

import styles from './styles'

const images = [
  {
    image: 'http://lorempixel.com/g/300/310/',
    screen: 'GiftsScreen',
  },
  {
    image: 'http://lorempixel.com/g/300/310/food',
    screen: 'QrCodeScreen',
  },
  {
    image: 'http://lorempixel.com/g/300/310/sports',
    screen: 'CollectionPointScreen',
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
      <View style={styles.scrollView}>
        {images.map((item) => {
          return (
            <TouchableOpacity
              key={item.screen}
              style={{
                marginHorizontal: 7,
              }}
              onPress={() => onBanner(item.screen)}
            >
              <Image source={{ uri: item.image }} style={styles.scrollImage} />
            </TouchableOpacity>
          )
        })}
      </View>
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
