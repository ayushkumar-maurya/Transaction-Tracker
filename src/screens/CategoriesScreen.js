import { useState, useEffect } from 'react'
import { ScrollView, Alert, ActivityIndicator } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { API_URL } from '../config'
import styles from '../styles/screens/categoriesScreen'
import CategoryRowItem from '../components/items/CategoryRowItem'
import colours from '../styles/colours'

const CategoriesScreen = ({ route, navigation }) => {
  const { screenTitle, path, updateInfo } = route.params
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const isFocused = useIsFocused()

  const getCategories = async () => {
    try {
      const url = `${API_URL}${path}`
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
  }, [])
  
  useEffect(() => {
    if(isFocused)
      getCategories()
  }, [isFocused])

  return (
    <>
      { loading && <ActivityIndicator size="large" color={colours.spinner} style={styles.spinner} /> }
      <ScrollView style={styles.container}>
        {categories.map((item, index) =>
          <CategoryRowItem category={item} index={index} updateInfo={updateInfo} key={index} />
        )}
      </ScrollView>
    </>
  )
}

export default CategoriesScreen
