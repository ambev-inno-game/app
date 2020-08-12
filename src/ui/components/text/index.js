import React, { useMemo } from 'react'
import { Text } from 'react-native'

import PropTypes from 'prop-types'

import { COLORS } from '~/res'

import styles from './styles'

const fontTypes = {
  'primary-regular': 'Roboto_400Regular',
  'secondary-bold': 'Poppins_700Bold',
}

export function BBText(props) {
  const { children, color, uppercase, size, style, type, ...otherProps } = props

  const textCustomStyle = useMemo(() => {
    return {
      color,
      fontSize: size,
      textTransform: uppercase ? 'uppercase' : null,
      fontFamily: fontTypes[type],
    }
  }, [color, uppercase, size, type])

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
  type: PropTypes.string,
  uppercase: PropTypes.bool,
}

BBText.defaultProps = {
  color: COLORS.DOVE_GRAY,
  size: 14,
  style: {},
  type: 'primary-regular',
  uppercase: false,
}
