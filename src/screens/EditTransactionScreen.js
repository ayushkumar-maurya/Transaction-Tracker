import { useState, useRef, useEffect } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  ActivityIndicator
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import DropDownPicker from 'react-native-dropdown-picker'
import DateTimePicker from '@react-native-community/datetimepicker'

import { API_URL } from '../config'
import styles from '../styles/screens/editTransactionScreen'
import colours from '../styles/colours'
import formatDate from '../utils/date'

const EditTransactionScreen = ({ route }) => {
  const navigation = useNavigation()
  const { screenTitle, categoriesInfo } = route.params
  const [loading, setLoading] = useState(true)

  const [openCategory, setOpenCategory] = useState(false)
  const [categoryId, setCategoryId] = useState(null)
  const [categoryItems, setCategoryItems] = useState([{ label: 'No data found!', value: '0' }])

  const [showDatePicker, setShowDatePicker] = useState(false)
  const dateRef = useRef(new Date())
  const [date, setDate] = useState(formatDate(dateRef.current))

  const updateCategoryItems = categories => {
    if(categories.length > 0) {
      setCategoryItems(categories.map(c => {
        return { label: c.name.length > 20 ? `${c.name.substring(0, 20)}...` : c.name, value: `${c.id}` }
      }))
    }
    else
      setCategoryItems([{ label: 'No data found!', value: '0' }])
  }

  const getCategories = async () => {
    try {
      const url = `${API_URL}${categoriesInfo.path}`
      let params = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }
      const res = await fetch(url, params)
      setLoading(false)
      if(!res)
        throw new Error('Unable to fetch required data!')
      let resData = await res.json()
      if(!(resData && Array.isArray(resData) && resData.length > 0))
        throw new Error('Unable to fetch required data!')
      updateCategoryItems(resData)
    }
    catch(err) {
      Alert.alert(screenTitle, err.message, [{ text: 'OK' }])
    }
  }

  useEffect(() => {
    navigation.setOptions({ title: screenTitle })
    getCategories()
  }, [])

  const onDateChange = (e, selectedDate) => {
    setShowDatePicker(false)
    if(selectedDate) {
      dateRef.current = selectedDate
      setDate(formatDate(dateRef.current))
    }
  }

  return (
    <>
      { loading && <ActivityIndicator size="large" color={colours.spinner} style={styles.spinner} /> }
      
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView style={styles.container}>
          <View style={styles.childContainer}>

            <Text style={styles.label}>{ categoriesInfo.parent }</Text>

            <DropDownPicker
              listMode="SCROLLVIEW"
              open={openCategory}
              value={categoryId}
              items={categoryItems}
              setOpen={setOpenCategory}
              setValue={setCategoryId}
              setItems={setCategoryItems}
              placeholder={`Select ${categoriesInfo.parent}`}
              style={styles.dropdown.dropdown}
              dropDownContainerStyle={styles.dropdown.dropdown}
              listItemContainerStyle={styles.dropdown.listItemContainerStyle}
              textStyle={styles.dropdown.text}
              arrowIconStyle={styles.dropdown.arrowIconStyle}
              tickIconStyle={styles.dropdown.tickIconStyle}
            />

            <Text style={styles.label}>Date</Text>

            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <TextInput
                style={styles.textInput}
                editable={false}
                pointerEvents="none"
                value={date}
                placeholder="Date"
                placeholderTextColor={colours.textInputPlaceholder}
              />
            </TouchableOpacity>

            { showDatePicker && <View style={styles.datePicker}>
              <DateTimePicker
                value={dateRef.current}
                mode="date"
                display={Platform.OS === 'ios' ? 'inline' : 'calendar'}
                onValueChange={onDateChange}
              />
            </View> }

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  )
}

export default EditTransactionScreen
