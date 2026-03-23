import { useState, useEffect } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert
} from 'react-native'

import { API_URL } from '../../config'
import styles from '../styles/screens/addCategoryScreen'
import colours from '../colours'

const AddCategoryScreen = ({ route, navigation }) => {
  const path = route.params.path

  const [name, setName] = useState(null)
  const [description, setDescription] = useState(null)
  const [disableAddBtn, setDisableAddBtn] = useState(false)

  useEffect(() => {
    navigation.setOptions({ title: route.params.screenTitle })
  }, [])

  const sendAddRequest = async () => {
    setDisableAddBtn(true)

    const postData = { name, description }
  
    try {
      if(!postData.name)
        throw new Error('Please enter the name!')
      postData.name = postData.name.trim()
      if(postData.name.length === 0)
        throw new Error('Please enter valid name!')

      if(postData.description)
        postData.description = postData.description.trim()

      let categoryAdded = false

      const url = `${API_URL}${path}`;
      let params = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
      }

      const res = await fetch(url, params)
      if(res) {
        let resData = await res.json()
        if(resData) {
          if(resData.insertedId)
            categoryAdded = true
          else if(resData.error)
            throw new Error(resData.error)
        }
      }

      if(categoryAdded) {
        Alert.alert('Add', `${postData.name} added successfully!`, [{ text: 'OK' }])
        setName(null)
        setDescription(null)
      }
      else
        throw new Error('Some error occurred. Please try again!')
    }
    catch(err) {
      Alert.alert('Add', err.message, [{ text: 'OK' }])
    }
    finally {
      setDisableAddBtn(false)
    }
  }

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

          <TouchableOpacity onPress={sendAddRequest} style={styles.button} disabled={disableAddBtn}>
            <Text style={styles.btnText}>Add</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default AddCategoryScreen
