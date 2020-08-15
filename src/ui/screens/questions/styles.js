import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  buttonContainer: {
    marginHorizontal: 15,
  },
  cardContainer: {
    marginBottom: 140,
    flexGrow: 1,
  },
  touchableImage: {
    marginVertical: 5,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: 'transparent',
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textContainer: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  image: {
    width: width / 3 - 20,
    height: (width / 3 - 20) * 1.2,
  },
  subtitle: {
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 15,
  },
  questionsTitle: {
    textAlign: 'auto',
  },
  questionsSubtitle: {
    textAlign: 'center',
  },
  scrollView: {
    marginTop: 20,
    marginHorizontal: 40,
  },
})
