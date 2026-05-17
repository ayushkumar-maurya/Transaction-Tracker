import { useState, useEffect } from 'react'
import { Text } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { API_URL } from '../config'

const TransactionsScreen = ({ route, navigation }) => {
  const { screenTitle, path, updateInfo } = route.params
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(true)
  const isFocused = useIsFocused()

  const getTransactions = async () => {
    try {
      const url = `${API_URL}${path}`
      let params = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }
      const res = await fetch(url, params)
      setLoading(false)
      if(!res)
        throw new Error('Unable to fetch transactions!')
      let resData = await res.json()
      if(!(resData && Array.isArray(resData)))
        throw new Error('Unable to fetch transactions!')
      setTransactions(resData)
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
      getTransactions()
  }, [isFocused])

  return (
    <Text>Transactions Screen!</Text>
  )
}

export default TransactionsScreen
