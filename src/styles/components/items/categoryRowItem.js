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
  name: {
    color: colours.listItemContent1,
    fontSize: 20,
    fontWeight: 'bold'
  },
  desc: {
    color: colours.listItemContent2,
    fontSize: 15
  },

  amtContainer: {
    justifyContent: 'center',
    paddingLeft: 10,
    flexGrow: 0,
    flexShrink: 0
  },
  amt: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  positiveAmt: {
    color: colours.positiveAmtFg
  },
  negativeAmt: {
    color: colours.negativeAmtFg
  },

  line: {
    borderTopWidth: 1,
    borderColor: colours.listItemBorder,
  }
})

export default styles
