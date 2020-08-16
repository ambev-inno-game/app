import React, { useLayoutEffect } from 'react'
import { ScrollView, Image, TouchableOpacity, View } from 'react-native'

import { NavigationService } from '~/services'
import { AppHeader } from '~/ui/components'

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

export function HomeScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <AppHeader title='Home' />,
    })
  }, [navigation])

  function onBanner(value) {
    NavigationService.navigate({ screen: value })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onBanner('SempreEmCasaScreen')}>
        <Image
          source={{ uri: 'http://lorempixel.com/g/300/310/food' }}
          style={styles.bigBanner}
        />
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        {images.map((item) => {
          return (
            <TouchableOpacity
              key={item.screen}
              style={{
                marginHorizontal: 7,
              }}
              onPress={() => onBanner(item.screen)}
            >
              <Image source={{ uri: item.image }} style={styles.littleBanner} />
            </TouchableOpacity>
          )
        })}
      </View>
      <TouchableOpacity onPress={() => onBanner('ArticleScreen')}>
        <Image
          source={{ uri: 'http://lorempixel.com/g/300/310/sports' }}
          style={styles.bigBanner}
        />
      </TouchableOpacity>
    </View>
  )
}
