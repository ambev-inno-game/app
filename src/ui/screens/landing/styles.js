import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 345,
    borderRadius: 15,
  },
  title: {
    fontWeight: 'bold',
    marginLeft: 25,
    marginVertical: 25,
  },
  carouselTitle: {
    marginVertical: 20,
    textAlign: 'center',
  },
  carouselSubtitle: {
    textAlign: 'center',
  },
  scrollView: {
    marginTop: 20,
    marginHorizontal: 40,
  },
})
