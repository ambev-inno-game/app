import { StyleSheet, Dimensions } from 'react-native'

import { COLORS } from '~/res'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  name: {
    marginTop: 10,
    padding: 10,
  },
  profileImage: {
    width: width / 4,
    height: width / 4,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: COLORS.CARIBBEAN_GREEN,
  },
  imageContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    width: width / 3,
    height: height / 4,
    marginLeft: 10,
  },
  congratsContainer: {
    marginTop: 30,
    width: '95%',
    padding: 10,
    alignItems: 'flex-start',
    backgroundColor: COLORS.CORNFLOWER_BLUE,
    margin: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: COLORS.ALTO,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  infoContainer: {
    padding: 15,
    marginBottom: 30,
  },
})
