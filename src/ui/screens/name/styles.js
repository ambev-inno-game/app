import { StyleSheet } from 'react-native'

import { COLORS } from '~/res/colors'

export default StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 20,
    backgroundColor: COLORS.WHITE,
    flexGrow: 1,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitle: {
    marginTop: 5,
  },
  image: {
    width: '100%',
    height: 310,
    borderRadius: 15,
  },
  finalScreen: {
    alignItems: 'center',
  },
})
