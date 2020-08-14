import { StyleSheet } from 'react-native'

import { COLORS } from '~/res'

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.WILD_SAND,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 30,
    shadowColor: COLORS.ALTO,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
})
