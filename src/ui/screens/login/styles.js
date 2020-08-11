import { StyleSheet } from 'react-native'

import { COLORS } from '~/res/colors'

export default StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: COLORS.WHITE,
    flex: 1,
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 17,
    marginTop: 5,
  },
  subcontent: {
    alignItems: "center",
    flexDirection: "column",
  },
  textContent: {
    fontSize: 17,
    alignItems: "center",
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
    borderBottomColor: "black",
    borderBottomWidth: 1,
    margin: 10,
  }
})
