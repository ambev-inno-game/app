import { StyleSheet } from 'react-native'

import { COLORS } from '~/res'

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.WHITE,
    padding: 20,
    paddingTop: 35,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.WILD_SAND,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 15,
    shadowColor: COLORS.ALTO,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  topContainer: {
    marginBottom: 20,
  },
})
