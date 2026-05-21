import { useState, useRef, useEffect } from 'react'
import {
  Platform,
  ScrollView,
  View,
  TextInput,
  Keyboard,
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
import { formatDate } from '../utils/date'

const EditTransactionScreen = ({ route }) => {
  const navigation = useNavigation()
  const { screenTitle, method, path, deletePath, categoriesInfo, transaction } = route.params
  const activity = transaction ? 'UPDATE' : 'ADD'
  const capActivity = activity.charAt(0).toUpperCase() + activity.slice(1).toLowerCase()

  const [loading, setLoading] = useState(true)
  const [childContainerMarginBottom, setChildContainerMarginBottom] = useState(styles.childContainerMarginBottom)
  const [disableBtn, setDisableBtn] = useState(false)

  const [openCategory, setOpenCategory] = useState(false)
  const [categoryItems, setCategoryItems] = useState([{ label: 'No data found!', value: '0' }])

  const [showDatePicker, setShowDatePicker] = useState(false)
  const dateRef = useRef(new Date())
  
  const [categoryId, setCategoryId] = useState(null)
  const [date, setDate] = useState(formatDate(dateRef.current))
  const [description, setDescription] = useState(null)
  const [deposit, setDeposit] = useState(null)
  const [withdrawal, setWithdrawal] = useState(null)
  const [remark, setRemark] = useState(null)

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

    if(activity === 'UPDATE') {
      setCategoryId(String(transaction.category_id))
      setDate(transaction.date)
      setDescription(transaction.description)
      setDeposit(transaction.deposit)
      setWithdrawal(transaction.withdrawal)
      setRemark(transaction.remark)
    }
  
    const showSubscription = Keyboard.addListener('keyboardDidShow', e => {
      setChildContainerMarginBottom(styles.childContainerMarginBottom + e.endCoordinates.height)
    })
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setChildContainerMarginBottom(styles.childContainerMarginBottom)
    })

    return () => {
      showSubscription.remove()
      hideSubscription.remove()
    }
  }, [])

  const onDateChange = (e, selectedDate) => {
    setShowDatePicker(false)
    if(selectedDate) {
      dateRef.current = selectedDate
      setDate(formatDate(dateRef.current))
    }
  }

  const sendEditRequest = async () => {
    setDisableBtn(true)

    const postData = {
      categoryId,
      date,
      description,
      deposit: Number(deposit),
      withdrawal: Number(withdrawal),
      remark
    }

    if(activity === 'UPDATE')
      postData.id = transaction.id

    try {
      if(!postData.categoryId || postData.categoryId === '0')
        throw new Error('Please select the Category ID!')

      if(postData.date != null && !(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(postData.date)))
        throw new Error('Please enter the date in correct format i.e., YYYY-MM-DD!')

      if(postData.description)
        postData.description = postData.description.trim()

      if(!postData.deposit && !postData.withdrawal)
        throw new Error('Please enter either deposit or withdrawal amount!')

      if(postData.remark)
        postData.remark = postData.remark.trim()

      let transactionEdited = false

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
            transactionEdited = true
          else if(resData.error)
            throw new Error(resData.error)
        }
      }

      if(transactionEdited) {
        if(activity === 'ADD') {
          dateRef.current = new Date()

          setCategoryId(null)
          setDate(formatDate(dateRef.current))
          setDescription(null)
          setDeposit(null)
          setWithdrawal(null)
          setRemark(null)
        }
        else if(activity === 'UPDATE')
          navigation.goBack()
        Alert.alert(capActivity, `Transaction ${activity === 'ADD' ? 'added' : 'updated'} successfully!`, [{ text: 'OK' }])
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

  return (
    <>
      { loading && <ActivityIndicator size="large" color={colours.spinner} style={styles.spinner} /> }
      
      <ScrollView style={styles.container}>
        <View style={[styles.childContainer, { marginBottom: childContainerMarginBottom }]}>

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

          <Text style={styles.label}>Deposit Amount</Text>

          <TextInput
            keyboardType="numeric"
            style={styles.textInput}
            onChangeText={setDeposit}
            value={deposit}
            placeholder="Deposit Amount"
            placeholderTextColor={colours.textInputPlaceholder}
            { ...(Platform.OS === 'ios'
              ? {selectionColor: colours.textInput}
              : {cursorColor: colours.textInput}) }
          />

          <Text style={styles.label}>Withdrawal Amount</Text>

          <TextInput
            keyboardType="numeric"
            style={styles.textInput}
            onChangeText={setWithdrawal}
            value={withdrawal}
            placeholder="Withdrawal Amount"
            placeholderTextColor={colours.textInputPlaceholder}
            { ...(Platform.OS === 'ios'
              ? {selectionColor: colours.textInput}
              : {cursorColor: colours.textInput}) }
          />

          <Text style={styles.label}>Remark</Text>

          <TextInput
            multiline
            style={[styles.textInput, styles.textInputMultiline]}
            onChangeText={setRemark}
            value={remark}
            placeholder="Remark"
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
        </View>

        </View>
      </ScrollView>
    </>
  )
}

export default EditTransactionScreen
