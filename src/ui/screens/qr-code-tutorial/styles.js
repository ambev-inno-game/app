import { StyleSheet, Dimensions } from 'react-native'

import { COLORS } from '~/res'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  image: {
    width: width * 0.8,
    height: width,
  },
  text: { textAlign: 'center' },
})
