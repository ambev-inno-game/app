import { StyleSheet } from 'react-native'

import { COLORS } from '~/res'

export default StyleSheet.create({
  input: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: COLORS.CORNFLOWER_BLUE,
    minWidth: '100%',
    fontSize: 16,
    marginVertical: 15,
  },
  error: {
    position: 'absolute',
    bottom: -5,
    right: 10,
  },
})
