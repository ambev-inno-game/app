import React, { useMemo } from 'react'
import { Text } from 'react-native'

import PropTypes from 'prop-types'

import { COLORS } from '~/res'

import styles from './styles'

export function BBText(props) {
  const { children, color, uppercase, size, style, ...otherProps } = props

  const textCustomStyle = useMemo(() => {
    return {
      color,
      fontSize: size,
      textTransform: uppercase ? 'uppercase' : null,
    }
  }, [color, uppercase, size])

  return (
    <Text style={[textCustomStyle, style]} {...otherProps}>
      {children}
    </Text>
  )
}

BBText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
  uppercase: PropTypes.bool,
}

BBText.defaultProps = {
  color: COLORS.DOVE_GRAY,
  size: 14,
  style: {},
  uppercase: false,
}
