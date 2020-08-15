import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
  },
  scrollView: {
    // marginTop: 20,
    // marginHorizontal: 40,
    // backgroundColor: 'red',
    width: '100%',
  },
  image: {
    width: width * 0.7,
    height: (width / 2 - 30) * 1.2,
    borderRadius: 5,
  },
})
