import { StyleSheet } from "react-native"
import colours from "../../colours"

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
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15
  },
  button: {
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  editBtn: {
    backgroundColor: colours.buttonBg
  },
  deleteBtn: {
    backgroundColor: colours.buttonDanger
  },
  cancelBtn: {
    backgroundColor: colours.buttonCancel
  },
  btnText: {
    fontSize: 20,
    color: colours.buttonFg
  }
})

export default styles
