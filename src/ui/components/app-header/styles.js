import { StyleSheet } from 'react-native'

import { COLORS } from '~/res'

export default StyleSheet.create({
  container: {
    height: 90,
    padding: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
  },

  buttonContainer: {
    position: 'absolute',
    left: 10,
    bottom: 15,
  },
})
