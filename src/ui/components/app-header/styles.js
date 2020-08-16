import { StyleSheet } from 'react-native'

import { COLORS } from '~/res'

export default StyleSheet.create({
  container: {
    height: 90,
    padding: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: COLORS.CORNFLOWER_BLUE,
    flexDirection: 'row',
  },

  buttonContainer: {
    position: 'absolute',
    left: 10,
    bottom: 15,
  },
})
