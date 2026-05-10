import { useState, useEffect } from 'react'
import { Text, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { API_URL } from '../config'
import styles from '../styles/screens/editTransactionScreen'
import colours from '../styles/colours'

const EditTransactionScreen = ({ route }) => {
  const navigation = useNavigation()
  const { screenTitle, categoriesPath } = route.params
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  const getCategories = async () => {
    try {
      const url = `${API_URL}${categoriesPath}`
      let params = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }
      const res = await fetch(url, params)
      setLoading(false)
      if(!res)
        throw new Error('Unable to fetch records!')
      let resData = await res.json()
      if(!(resData && Array.isArray(resData)))
        throw new Error('Unable to fetch records!')
      setCategories(resData)
    }
    catch(err) {
      Alert.alert(screenTitle, err.message, [{ text: 'OK' }])
    }
  }

  useEffect(() => {
    navigation.setOptions({ title: screenTitle })
    getCategories()
  }, [])

  return (
    <>
      { loading && <ActivityIndicator size="large" color={colours.spinner} style={styles.spinner} /> }
      <Text>You are viewing Edit Transaction Screen!</Text>
    </>
  )
}

export default EditTransactionScreen
