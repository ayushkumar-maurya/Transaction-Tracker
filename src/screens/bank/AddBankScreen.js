import { useState } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native'

import styles from '../../styles/screens/bank/addBankScreen'
import colours from '../../colours'

const AddBankScreen = () => {
  const [name, setName] = useState(null)
  const [description, setDescription] = useState(null)

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style={styles.container}>
        <View style={styles.childContainer}>

          <Text style={styles.label}>Name</Text>

          <TextInput
            style={styles.textInput}
            onChangeText={setName}
            value={name}
            placeholder="Name"
            placeholderTextColor={colours.textInputPlaceholder}
            { ...(Platform.OS === 'ios'
              ? {selectionColor: colours.textInput}
              : {cursorColor: colours.textInput}) }
          />

          <Text style={styles.label}>Description</Text>

          <TextInput
            multiline
            style={[styles.textInput, styles.textInputMultiline]}
            onChangeText={setDescription}
            value={description}
            placeholder="Description"
            placeholderTextColor={colours.textInputPlaceholder}
            { ...(Platform.OS === 'ios'
              ? {selectionColor: colours.textInput}
              : {cursorColor: colours.textInput}) }
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>Add</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default AddBankScreen
