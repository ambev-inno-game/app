import React from 'react'
import { TouchableOpacity, ActivityIndicator } from 'react-native'

import PropTypes from 'prop-types'

import { COLORS } from '~/res'

import { BBText } from '../text'
import styles from './styles'

export function Link(props) {
  const { onPress, children, isLoading } = props

  function renderLabel() {
    if (isLoading) {
      return <ActivityIndicator color={COLORS.BLACK} />
    }

    return (
      <BBText size={17} style={styles.label}>
        {children}
      </BBText>
    )
  }

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.link}
      onPress={onPress}
    >
      {renderLabel()}
    </TouchableOpacity>
  )
}

Link.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
}

Link.defaultProps = {
  isLoading: false,
}
