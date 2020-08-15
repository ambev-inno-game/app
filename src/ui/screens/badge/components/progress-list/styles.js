import { StyleSheet } from 'react-native'

import { COLORS } from '~/res'

export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    alignItems: 'center',
  },
  itemLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemDot: {
    height: 12,
    width: 12,
    backgroundColor: COLORS.CORNFLOWER_BLUE,
    borderRadius: 10,
    marginRight: 20,
  },
  line: {
    width: 2,
    height: '88%',
    position: 'absolute',
    backgroundColor: COLORS.CORNFLOWER_BLUE,
    left: 5,
    top: 25,
  },
})
