import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

import { COLORS } from '~/res'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  image: {
    width: width / 2,
    height: height / 3.5,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: COLORS.CARIBBEAN_GREEN,
  },
  imageContainer: {
    alignItems: 'center',
  },
})
