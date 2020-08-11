import { StyleSheet } from 'react-native'

import { COLORS } from '~/res'

export default StyleSheet.create({
  container: {
    position: 'absolute',
    width: '95%',
    height: 80,
    borderRadius: 10,
    marginTop: 25,
    alignSelf: 'center',
    backgroundColor: COLORS.WHITE,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    borderRadius: 10,
  },
})
