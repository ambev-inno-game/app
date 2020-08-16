import { StyleSheet, Dimensions } from 'react-native'

import { COLORS } from '~/res'

const { width, height } = Dimensions.get('window')

const contentHeight = height - 90

const imagesMargin = 10

export default StyleSheet.create({
  bigBanner: {
    width: width - imagesMargin * 2,
    height: contentHeight / 2.5,
    margin: 10,
    borderRadius: 10,
  },
  littleBanner: {
    width: width / 3 - imagesMargin * 2,
    height: contentHeight / 4,
    borderRadius: 10,
  },
  inputStyle: {
    position: 'absolute',
    bottom: 13,
    left: 10,
    color: COLORS.ALTO,
  },
  input: {
    backgroundColor: COLORS.WHITE,
    height: 50,
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 45,
  },
  headerContainer: {
    backgroundColor: COLORS.CORNFLOWER_BLUE,
    paddingBottom: 20,
    paddingHorizontal: 15,
  },
  secondSectionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
})
