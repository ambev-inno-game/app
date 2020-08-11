import React from 'react'
import { TouchableOpacity, ActivityIndicator } from 'react-native'

import PropTypes from 'prop-types'

import { COLORS } from '~/res'

import { BBText } from '../text'
import styles from './styles'

export function Button(props) {
  const { onPress, children, isLoading } = props

  function renderLabel() {
    if (isLoading) {
      return <ActivityIndicator color={COLORS.BLACK} />
    }

    return (
      <BBText color={COLORS.BLACK} size={17} style={styles.label}>
        {children}
      </BBText>
    )
  }

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.button}
      onPress={onPress}
    >
      {renderLabel()}
    </TouchableOpacity>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
}

Button.defaultProps = {
  isLoading: false,
}
