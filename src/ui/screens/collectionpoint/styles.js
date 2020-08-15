import { StyleSheet, Dimensions } from 'react-native'

import { COLORS } from '~/res'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  map: {
    width,
    height,
  },
})
