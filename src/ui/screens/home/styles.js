import { StyleSheet, Dimensions } from 'react-native'

import { COLORS } from '~/res'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.WHITE,
    paddingVertical: 35,
  },
  scrollView: {
    paddingVertical: 20,
  },
  image: {
    width: width * 0.7,
    height: (width / 2 - 30) * 1.2,
    borderRadius: 5,
  },
})
