import React, { useEffect, useState, useRef, useCallback } from 'react'
import { Animated, TouchableOpacity } from 'react-native'

import EventEmitter from 'sm-event-emitter'

import { BBText } from '~/ui/components/text'

import styles from './styles'

export function Toast() {
  const [isVisible, setIsVisible] = useState(false)
  const [message, setMessage] = useState('')
  const animatedValue = useRef(new Animated.Value(0)).current

  const animateToast = useCallback(
    ({ show = false, delay = 0 }) => {
      Animated.timing(animatedValue, {
        delay,
        duration: 300,
        toValue: show ? 1 : 0,
        useNativeDriver: true,
      }).start(() => {
        setIsVisible(show)
        if (show) {
          animateToast({ show: false, delay: 2000 })
        }
      })
    },
    [animatedValue]
  )

  useEffect(() => {
    const onToastShowEvent = ({ message: toastMessage }) => {
      if (toastMessage && !isVisible) {
        setMessage(toastMessage)
        setIsVisible(true)
        animateToast({ show: true })
      }
    }

    const showEventId = EventEmitter.on('GLOBAL_TOAST_SHOW', onToastShowEvent)

    return () => {
      if (showEventId) {
        EventEmitter.remove(showEventId)
      }
    }
  }, [animateToast, isVisible])

  function renderContent() {
    if (isVisible) {
      return (
        <Animated.View style={[styles.container, { opacity: animatedValue }]}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.touchable}
            onPress={() => {
              animateToast({ show: false })
            }}
          >
            <BBText size={16} type='secondary-bold'>
              {message}
            </BBText>
          </TouchableOpacity>
        </Animated.View>
      )
    }

    return null
  }

  return renderContent()
}
