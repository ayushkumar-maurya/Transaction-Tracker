import { StyleSheet } from "react-native"
import colours from "../colours"

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: colours.screenBg,
  },
  childContainer: {
    padding: 15,
    marginBottom: 40
  },
  label: {
    color: colours.inputLabel,
    fontSize: 15
  },

  dropdown: {
    dropdown: {
      backgroundColor: colours.dropdownBg,
      borderWidth: 1,
      borderColor: colours.dropdownBorder,
      borderRadius: 10,
      paddingLeft: 0,
      paddingRight: 10,
      paddingVertical: 0,
      marginBottom: 15
    },
    listItemContainerStyle: {
      height: 'auto',
      paddingHorizontal: 0,
      paddingVertical: 0
    },
    text: {
      fontSize: 20,
      color: colours.dropdownFg,
      padding: 10
    },
    arrowIconStyle: {
      tintColor: colours.dropdownFg
    },
    tickIconStyle: {
      tintColor: colours.dropdownFg
    }
  },

  datePicker: {
    alignItems: 'center'
  },

  textInput: {
    fontSize: 20,
    color: colours.textInput,
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colours.textInputBorder,
    borderRadius: 10
  },
  spinner: {
    position: 'absolute',
    zIndex: 999,
    padding: 10,
    alignSelf: 'center'
  }
})

export default styles
