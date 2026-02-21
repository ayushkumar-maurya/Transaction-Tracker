import { Button } from 'react-native'

const BankScreen = ({ navigation }) => {
  return (
    <Button title='Add Transaction' onPress={ () => navigation.navigate('BankAddTransaction') } />
  )
}

export default BankScreen
