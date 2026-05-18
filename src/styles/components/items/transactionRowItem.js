import { StyleSheet } from "react-native"
import colours from "../../colours"

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: colours.listItemBg,
    padding: 15
  },

  infoContainer: {
    flexGrow: 1,
    flexShrink: 1
  },
  infoSecionContainer: {
    flexDirection: 'row'
  },
  date: {
    flexGrow: 0,
    flexShrink: 0,
    paddingRight: 10,
    color: colours.listItemContent1,
    fontSize: 15,
    fontWeight: 'bold'
  },
  category: {
    flexGrow: 1,
    flexShrink: 1,
    color: colours.listItemContent1,
    fontSize: 15,
    fontWeight: 'bold'
  },
  desc: {
    color: colours.listItemContent2,
    fontSize: 15,
    fontWeight: 'bold'
  },
  remark: {
    color: colours.listItemContent2,
    fontSize: 12
  },

  amtContainer: {
    justifyContent: 'center',
    paddingLeft: 10,
    flexGrow: 0,
    flexShrink: 0
  },
  amt: {
    color: colours.listItemContent1,
    fontSize: 17,
    fontWeight: 'bold'
  },

  line: {
    borderTopWidth: 1,
    borderColor: colours.listItemBorder,
  }
})

export default styles
