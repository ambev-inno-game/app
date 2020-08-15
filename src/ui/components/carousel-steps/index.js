import React from 'react'
import { View } from 'react-native'

import PropTypes from 'prop-types'

import { COLORS } from '~/res'

import styles from './styles'

export function CarouselSteps(props) {
  const { numberOfSteps, selectedStep, activeColor, unactiveColor } = props

  function renderCarouselDots() {
    const dots = []

    for (let i = 0; i < numberOfSteps; i++) {
      const backgroundColor = selectedStep === i ? activeColor : unactiveColor
      dots.push(
        <View key={`dot_${i}`} style={[styles.dot, { backgroundColor }]} />
      )
    }

    return dots
  }

  return <View style={styles.dotsContainer}>{renderCarouselDots()}</View>
}

CarouselSteps.propTypes = {
  numberOfSteps: PropTypes.number.isRequired,
  selectedStep: PropTypes.number.isRequired,
  activeColor: PropTypes.string,
  unactiveColor: PropTypes.string,
}

CarouselSteps.defaultProps = {
  activeColor: COLORS.CARIBBEAN_GREEN,
  unactiveColor: COLORS.ALTO,
}
