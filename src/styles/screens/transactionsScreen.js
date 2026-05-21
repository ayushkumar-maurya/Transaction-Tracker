import { StyleSheet } from "react-native"
import colours from "../colours"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.screenBg
  },
  contentContainer: {
    paddingBottom: 60
  },
  spinner: {
    position: 'absolute',
    zIndex: 999,
    padding: 10,
    alignSelf: 'center'
  }
})

export default styles
