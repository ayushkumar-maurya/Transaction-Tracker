import { Button } from 'react-native'

const StockScreen = ({ navigation }) => {
  return (
    <Button title='Add Transaction' onPress={ () => navigation.navigate('StockAddTransaction') } />
  )
}

export default StockScreen
