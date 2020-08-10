import { StyleSheet } from 'react-native'

import { COLORS } from '~/res'

export default StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: COLORS.SILVER,
    minWidth: '100%',
    borderRadius: 15,
    fontSize: 16,
    marginVertical: 15,
  },
  error: {
    position: 'absolute',
    bottom: -5,
    right: 10,
  },
})
