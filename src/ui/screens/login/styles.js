import { StyleSheet } from 'react-native'

import { COLORS } from '~/res/colors'

export default StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: COLORS.WHITE,
    flexGrow: 1,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitle: {
    marginTop: 5,
  },
  subcontent: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'baseline',
    width: '40%',
    marginTop: 15,
  },
  newAccount: {
    alignItems: 'center',
  },
  topContainer: {
    flex: 1,
    marginBottom: 30,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  line: {
    borderBottomColor: COLORS.DOVE_GRAY,
    borderBottomWidth: 1,
    margin: 10,
  },
})
