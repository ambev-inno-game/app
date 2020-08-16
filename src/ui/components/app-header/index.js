import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'

import PropTypes from 'prop-types'

import { FontAwesome, AntDesign } from '@expo/vector-icons'

import { COLORS } from '~/res'
import { NavigationService } from '~/services'
import { BBText } from '~/ui/components'

import logo from './logo.png'
import styles from './styles'

export function AppHeader({ showBackButton, title, showLogo }) {
  function onHamburguerPress() {
    NavigationService.openDrawer()
  }

  function onBackPress() {
    NavigationService.pop()
  }

  function renderLeftButton() {
    if (showBackButton) {
      return (
        <TouchableOpacity style={{ padding: 5 }} onPress={onBackPress}>
          <AntDesign color={COLORS.WHITE} name='arrowleft' size={25} />
        </TouchableOpacity>
      )
    }

    return (
      <TouchableOpacity style={{ padding: 5 }} onPress={onHamburguerPress}>
        <FontAwesome color={COLORS.WHITE} name='navicon' size={25} />
      </TouchableOpacity>
    )
  }

  function renderTitle() {
    if (showLogo) {
      return (
        <Image
          source={logo}
          style={{ width: 100, height: 30, marginBottom: 10 }}
        />
      )
    }

    return (
      <BBText color={COLORS.WHITE} size={22} type='secondary-bold'>
        {title}
      </BBText>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>{renderLeftButton()}</View>
      {renderTitle()}
    </View>
  )
}

AppHeader.propTypes = {
  showBackButton: PropTypes.bool,
  showLogo: PropTypes.bool,
  title: PropTypes.string,
}

AppHeader.defaultProps = {
  showBackButton: false,
  showLogo: false,
  title: '',
}
