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
  const { screenTitle, method, path, deletePath, category } = route.params
  const activity = category ? 'UPDATE' : 'ADD'
  const capActivity = activity.charAt(0).toUpperCase() + activity.slice(1).toLowerCase()

  const [name, setName] = useState(null)
  const [description, setDescription] = useState(null)
  const [disableBtn, setDisableBtn] = useState(false)

  useEffect(() => {
    navigation.setOptions({ title: screenTitle })

    if(activity === 'UPDATE') {
      setName(category.name)
      setDescription(category.description)
    }
  }, [])

  const sendEditRequest = async () => {
    setDisableBtn(true)

    const postData = { name, description }

    if(activity === 'UPDATE')
      postData.id = category.id
  
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
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
      }

      const res = await fetch(url, params)
      if(res) {
        let resData = await res.json()
        if(resData) {
          if((activity === 'ADD' && resData.insertedId) || (activity === 'UPDATE' && resData.affectedRows))
            categoryEdited = true
          else if(resData.error)
            throw new Error(resData.error)
        }
      }

      if(categoryEdited) {
        if(activity === 'ADD') {
          setName(null)
          setDescription(null)
        }
        else if(activity === 'UPDATE')
          navigation.goBack()
        Alert.alert(capActivity, `${postData.name} ${activity === 'ADD' ? 'added' : 'updated'} successfully!`, [{ text: 'OK' }])
      }
      else
        throw new Error('Some error occurred. Please try again!')
    }
    catch(err) {
      Alert.alert(capActivity, err.message, [{ text: 'OK' }])
    }
    finally {
      setDisableBtn(false)
    }
  }

  const sendDeleteRequest = async () => {
    setDisableBtn(true)
    const postData = { id: category.id }

    try {
      let categoryDeleted = false

      const url = `${API_URL}${deletePath}`;
      let params = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
      }

      const res = await fetch(url, params)
      if(res) {
        let resData = await res.json()
        if(resData) {
          if(resData.affectedRows)
            categoryDeleted = true
          else if(resData.error)
            throw new Error(resData.error)
        }
      }

      if(categoryDeleted) {
        navigation.goBack()
        Alert.alert('Delete', `${category.name} deleted successfully!`, [{ text: 'OK' }])
      }
      else
        throw new Error('Some error occurred. Please try again!')
    }
    catch(err) {
      Alert.alert('Delete', err.message, [{ text: 'OK' }])
    }
    finally {
      setDisableBtn(false)
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

          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={sendEditRequest}
              style={[styles.button, styles.editBtn]}
              disabled={disableBtn}
            >
              <Text style={styles.btnText}>{ capActivity }</Text>
            </TouchableOpacity>

            { activity === 'UPDATE' && <TouchableOpacity
              onPress={sendDeleteRequest}
              style={[styles.button, styles.deleteBtn]}
              disabled={disableBtn}
            >
              <Text style={styles.btnText}>Delete</Text>
            </TouchableOpacity> }

            { activity === 'UPDATE' && <TouchableOpacity
              onPress={navigation.goBack}
              style={[styles.button, styles.cancelBtn]}
              disabled={disableBtn}
            >
              <Text style={styles.btnText}>Cancel</Text>
            </TouchableOpacity> }
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default EditCategoryScreen
