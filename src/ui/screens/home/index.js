import React, { useRef, useEffect, useState } from 'react'
import { View } from 'react-native'

import { FormService, HomeApiService, LoaderService } from '~/services'

import styles from './styles'

export function HomeScreen() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function getHomeData() {
      LoaderService.show()
      const homeData = await HomeApiService.getHomePage()

      setData(homeData)
      LoaderService.hide()
    }

    getHomeData()
  }, [])

  return <View style={styles.container} />
}
