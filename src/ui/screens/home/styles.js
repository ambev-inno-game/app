import { StyleSheet, Dimensions } from 'react-native'

import { COLORS } from '~/res'

const { width, height } = Dimensions.get('window')

const contentHeight = height - 90

const imagesMargin = 10

export default StyleSheet.create({
  bigBanner: {
    width: width - imagesMargin * 2,
    height: contentHeight / 3 - imagesMargin * 2,
    margin: 10,
    borderRadius: 10,
  },
  littleBanner: {
    width: width / 3 - imagesMargin * 1.6,
    height: contentHeight / 3,
    borderRadius: 10,
  },
})
