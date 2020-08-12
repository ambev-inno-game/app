import { StyleSheet } from 'react-native'

import { COLORS } from '~/res'

export default StyleSheet.create({
  button: {
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.SILVER,
    backgroundColor: COLORS.ALTO,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 10,
    marginVertical: 15,
  },
  label: {
    letterSpacing: 1.2,
  },
})
