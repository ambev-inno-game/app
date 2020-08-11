import { StyleSheet } from 'react-native'

import { COLORS } from '~/res'

export default StyleSheet.create({
  button: {
    height: 65,
    borderWidth: 1,
    borderColor: COLORS.SILVER,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 15,
    marginVertical: 15,
  },
  label: {
    fontWeight: 'bold',
    letterSpacing: 1.2,
  },
})