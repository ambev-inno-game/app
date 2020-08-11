import { StyleSheet } from 'react-native'

import { COLORS } from '~/res/colors'

export default StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: COLORS.WHITE,
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    marginTop: 20,
  },
  subtitle: {
    marginTop: 5,
  },
  subcontent: {
    alignItems: "center",
    flexDirection: "column",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "baseline",
    width: "40%",
    marginTop: 15,
  },
  newAccount: {
    alignItems: "center"
  },
  anotherLogin: {
    top: 130,
    width: "100%"
  },
  line: {
    borderBottomColor: COLORS.DOVE_GRAY,
    borderBottomWidth: 1,
    margin: 10,
  }
})
