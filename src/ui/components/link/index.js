import React from 'react'
import { TouchableOpacity, ActivityIndicator } from 'react-native'

import PropTypes from 'prop-types'

import { COLORS } from '~/res'

import { BBText } from '../text'
import styles from './styles'

export function Link(props) {
  const { onPress, children } = props

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.link}
      onPress={onPress}
    >
      <BBText size={17} style={styles.label}>
        {children}
      </BBText>
    </TouchableOpacity>
  )
}

Link.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}
