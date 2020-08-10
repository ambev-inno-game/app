import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 80,
  },
  buttonContainer: {
    marginHorizontal: 20,
  },
  image: {
    width: '100%',
    height: width + width * 0.1,
    borderRadius: 20,
  },
})
