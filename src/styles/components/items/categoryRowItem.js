import { StyleSheet } from "react-native"
import colours from "../../../colours"

const styles = StyleSheet.create({
  item: {
    backgroundColor: colours.listItemBg,
    padding: 15
  },
  name: {
    color: colours.listItemTitle,
    fontSize: 20,
    fontWeight: 'bold'
  },
  desc: {
    color: colours.listItemDesc,
    fontSize: 15
  },
  line: {
    borderTopWidth: 1,
    borderColor: colours.listItemBorder,
  }
})

export default styles
