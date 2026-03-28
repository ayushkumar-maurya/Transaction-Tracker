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
import { useNavigation } from '@react-navigation/native'

import { API_URL } from '../../config'
import styles from '../styles/screens/editCategoryScreen'
import colours from '../colours'

const EditCategoryScreen = ({ route }) => {
  const navigation = useNavigation()
  const { screenTitle, path, category } = route.params
  const activity = category ? 'UPDATE' : 'ADD'
  const capActivity = activity.charAt(0).toUpperCase() + activity.slice(1).toLowerCase()

  const [name, setName] = useState(null)
  const [description, setDescription] = useState(null)
  const [disableEditBtn, setDisableEditBtn] = useState(false)

  useEffect(() => {
    navigation.setOptions({ title: screenTitle })

    if(category) {
      setName(category.name)
      setDescription(category.description)
    }
  }, [])

  const sendEditRequest = async () => {
    setDisableEditBtn(true)

    const postData = { name, description }
  
    try {
      if(!postData.name)
        throw new Error('Please enter the name!')
      postData.name = postData.name.trim()
      if(postData.name.length === 0)
        throw new Error('Please enter valid name!')

      if(postData.description)
        postData.description = postData.description.trim()

      let categoryEdited = false

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
            categoryEdited = true
          else if(resData.error)
            throw new Error(resData.error)
        }
      }

      if(categoryEdited) {
        Alert.alert(capActivity, `${postData.name} ${activity.toLowerCase()}ed successfully!`, [{ text: 'OK' }])
        setName(null)
        setDescription(null)
      }
      else
        throw new Error('Some error occurred. Please try again!')
    }
    catch(err) {
      Alert.alert(capActivity, err.message, [{ text: 'OK' }])
    }
    finally {
      setDisableEditBtn(false)
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

          <TouchableOpacity onPress={sendEditRequest} style={styles.button} disabled={disableEditBtn}>
            <Text style={styles.btnText}>{ capActivity }</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default EditCategoryScreen
