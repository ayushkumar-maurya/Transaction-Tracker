import { StyleSheet } from "react-native"
import colours from "../colours"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.screenBg,
  },
  childContainer: {
    paddingHorizontal: 15,
    paddingTop: 15
  },
  childContainerMarginBottom: 60,
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
  textInputMultiline: {
    height: 100,
    textAlignVertical: 'top'
  },
  deposit: {
    color: colours.depositFg
  },
  withdrawal: {
    color: colours.withdrawalFg
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
  },
  spinner: {
    position: 'absolute',
    zIndex: 999,
    padding: 10,
    alignSelf: 'center'
  }
})

export default styles
