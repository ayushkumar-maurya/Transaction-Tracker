import { Text, Button } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <Button title='Bank' onPress={ () => navigation.navigate('Bank') } />
      <Button title='Stock' onPress={ () => navigation.navigate('Stock') } />
    </>
  )
}

export default HomeScreen
