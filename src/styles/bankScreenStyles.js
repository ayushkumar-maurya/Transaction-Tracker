import { StyleSheet } from "react-native"
import colours from "../colours";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.screenBg
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  empty: {
    height: 100,
    width: 100,
    margin: 10
  }
});

export default styles
