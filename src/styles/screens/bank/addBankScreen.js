import { StyleSheet } from "react-native"
import colours from "../../../colours"

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
  textInput: {
    fontSize: 20,
    color: colours.textInput,
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colours.textInputBorder,
    borderRadius: 10
  },
  textInputMultiline: {
    height: 100,
    textAlignVertical: 'top'
  },
  button: {
    backgroundColor: colours.buttonBg,
    marginBottom: 15,
    borderRadius: 5,
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  btnText: {
    fontSize: 20,
    color: colours.buttonFg
  }
})

export default styles
