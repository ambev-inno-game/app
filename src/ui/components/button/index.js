import React from 'react'
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native'

import PropTypes from 'prop-types'

import { COLORS } from '~/res'

import styles from './styles'

export function Button(props) {
  const { onPress, children, isLoading } = props

  function renderLabel() {
    if (isLoading) {
      return <ActivityIndicator color={COLORS.BLACK} />
    }

    return <Text style={styles.label}>{children}</Text>
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
