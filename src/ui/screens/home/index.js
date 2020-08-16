import React from 'react'
import {
  ScrollView,
  Image,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import { COLORS } from '~/res'
import { NavigationService } from '~/services'
import { BBText } from '~/ui/components'

import data from './data.json'
import styles from './styles'

export function HomeScreen() {
  function onBanner(value) {
    NavigationService.navigate({ screen: value })
  }

  function renderFirstSection() {
    const { screen, image } = data.firstSection

    return (
      <TouchableOpacity activeOpacity={0.6} onPress={() => onBanner(screen)}>
        <Image source={{ uri: image }} style={styles.bigBanner} />
      </TouchableOpacity>
    )
  }

  function renderSecondSection() {
    return (
      <View style={styles.secondSectionContainer}>
        {data.secondSection.map((item) => {
          return (
            <View
              key={item.screen}
              style={{
                marginHorizontal: 7,
                borderWidth: 2,
                borderColor: COLORS.CARIBBEAN_GREEN,
                borderRadius: 10,
              }}
            >
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => onBanner(item.screen)}
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.littleBanner}
                />
              </TouchableOpacity>
            </View>
          )
        })}
      </View>
    )
  }

  function renderThirdSection() {
    const { screen, image } = data.thirdSection

    return (
      <TouchableOpacity activeOpacity={0.6} onPress={() => onBanner(screen)}>
        <Image source={{ uri: image }} style={styles.bigBanner} />
      </TouchableOpacity>
    )
  }

  function renderCustomHeader() {
    return (
      <View style={styles.headerContainer}>
        <BBText color={COLORS.WHITE} size={22} type='secondary-bold'>
          O que você procura?
        </BBText>
        <View>
          <TextInput placeholder='Procure o seu produto' style={styles.input} />
          <AntDesign name='search1' size={25} style={styles.inputStyle} />
        </View>
      </View>
    )
  }

  return (
    <>
      {renderCustomHeader()}
      <ScrollView contentContainerStyle={{ backgroundColor: COLORS.WHITE }}>
        {renderFirstSection()}
        {renderSecondSection()}
        {renderThirdSection()}
      </ScrollView>
    </>
  )
}
