import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import MapView from 'react-native-maps'

import * as Location from 'expo-location'

import { ToastService } from '~/services'
import { ScreenLoader } from '~/ui/components'

import styles from './styles'

export function CollectionPointScreen() {
  const [location, setLocation] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function getLocation() {
      setIsLoading(true)
      const { status } = await Location.requestPermissionsAsync()
      if (status !== 'granted') {
        ToastService.show('O acesso a localização não foi permitido')
      }

      const currentLocation = await Location.getCurrentPositionAsync({})
      console.tron.log(currentLocation)
      setLocation(currentLocation.coords)
      setIsLoading(false)
    }

    getLocation()
  }, [])

  function renderContent() {
    if (isLoading) {
      return <ScreenLoader />
    }

    return (
      <View style={styles.container}>
        <MapView region={{}} style={styles.map} />
      </View>
    )
  }

  return renderContent()
}
