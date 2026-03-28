import { useState, useEffect } from 'react'
import { ScrollView, Alert } from 'react-native'
import { API_URL } from '../../config'

import styles from '../styles/screens/categoriesScreen'
import CategoryRowItem from '../components/items/CategoryRowItem'

const CategoriesScreen = ({ route, navigation }) => {
  const { screenTitle, path, updateInfo } = route.params
  const [categories, setCategories] = useState([])

  useEffect(() => {
    navigation.setOptions({ title: screenTitle })

    const getCategories = async () => {
      try {
        const url = `${API_URL}${path}`
        let params = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        }
        const res = await fetch(url, params)
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

    getCategories()
  }, [])

  return (
    <ScrollView style={styles.container}>
      {categories.map((item, index) =>
        <CategoryRowItem category={item} index={index} updateInfo={updateInfo} key={index} />
      )}
    </ScrollView>
  )
}

export default CategoriesScreen
