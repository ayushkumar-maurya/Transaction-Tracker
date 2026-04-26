import { StyleSheet } from "react-native"
import colours from "../../colours"

const styles = StyleSheet.create({
  item: {
    height: 100,
    width: 100,
    backgroundColor: colours.menuItemBg,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 10,
    borderWidth: 1,
    borderColor: colours.menuItemBorder,
    borderRadius: 15,
  },
  icon: {
    height: 35,
    width: 35
  },
  title: {
    color: colours.menuItemFg,
    fontSize: 15,
    marginTop: 5
  }
});

export default styles
