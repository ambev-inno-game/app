import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react'
import { View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

import * as Location from 'expo-location'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useFocusEffect } from '@react-navigation/native'

import { ToastService } from '~/services'
import { ScreenLoader, AppHeader } from '~/ui/components'

import styles from './styles'

export function CollectionPointScreen({ navigation }) {
  const [location, setLocation] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  async function getLocation() {
    setIsLoading(true)
    const { status } = await Location.requestPermissionsAsync()
    if (status !== 'granted') {
      ToastService.show('O acesso a localização não foi permitido')
    }

    const currentLocation = await Location.getCurrentPositionAsync({})

    setLocation(currentLocation.coords)
    setIsLoading(false)
  }

  useFocusEffect(
    useCallback(() => {
      getLocation()
    }, [])
  )

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <AppHeader title='Pontos de Coleta' />,
    })
  }, [navigation])

  function renderMarkers() {
    const markers = [0.003, -0.005, 0.008, -0.01, 0.011, 0.032]

    return markers.map((i) => (
      <Marker
        coordinate={{
          latitude: location.latitude + Math.random() * i,
          longitude: location.longitude + Math.random() * i,
        }}
        description='Troque embalagens por pontos!'
        key={String(i)}
        title='Ponto de coleta'
      >
        <MaterialCommunityIcons color='green' name='recycle' size={35} />
      </Marker>
    ))
  }

  function renderContent() {
    if (isLoading) {
      return <ScreenLoader />
    }

    return (
      <View style={styles.container}>
        <MapView
          showsUserLocation
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.016,
            longitudeDelta: 0.016,
          }}
          style={styles.map}
        >
          {renderMarkers()}
        </MapView>
      </View>
    )
  }

  return renderContent()
}
