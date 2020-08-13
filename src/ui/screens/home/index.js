import React, { useRef, useEffect, useState } from 'react'
import { View } from 'react-native'

import { HomeApiService, LoaderService } from '~/services'
import { BBText } from '~/ui/components'

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

  return (
    <View style={styles.container}>
      <BBText size={20} type='secondary-bold'>
        Nesta tela você terá acesso aos principais produtos da nossa aplicação,
        bem como a criação do seu próprio box.
      </BBText>
    </View>
  )
}
