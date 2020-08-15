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
    marginBottom: 20,
    flexDirection: 'row',
  },
  scrollImage: {
    width: width * 0.29,
    height: (width / 2 - 30) * 1,
    borderRadius: 5,
  },
  image: {
    width: width * 0.95,
    height: (width / 2 - 30) * 1.2,
    borderRadius: 5,
    marginBottom: 20,
  },
  title: {
    textAlign: 'left',
    paddingLeft: 7,
  },
})
