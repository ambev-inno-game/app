import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'

import EventEmitter from 'sm-event-emitter'

import { COLORS } from '~/res'

import styles from './styles'

export function Loader() {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const showEventId = EventEmitter.on('GLOBAL_LOADER_SHOW', () => {
      setIsLoading(true)
    })
    const hideEventId = EventEmitter.on('GLOBAL_LOADER_HIDE', () =>
      setIsLoading(false)
    )

    return () => {
      if (showEventId) {
        EventEmitter.remove(showEventId)
      }
      if (hideEventId) {
        EventEmitter.remove(hideEventId)
      }
    }
  }, [])

  function renderContent() {
    if (isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator color={COLORS.BLACK} size='large' />
        </View>
      )
    }

    return null
  }

  return renderContent()
}
