import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './screens/HomeScreen'

import BankScreen from './screens/Menu/BankScreen'
import BankScreens from './screens/BankScreens'

import StockScreen from './screens/Menu/StockScreen'
import StockScreens from './screens/StockScreens'

const Routes = () => {
  const Stack = createNativeStackNavigator()

  return (
  <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name='Home' component={HomeScreen} />

    <Stack.Screen name='Bank' component={BankScreen} />
    <Stack.Screen name='BankAddTransaction' component={BankScreens.AddTransaction} />

    <Stack.Screen name='Stock' component={StockScreen} />
    <Stack.Screen name='StockAddTransaction' component={StockScreens.AddTransaction} />
  </Stack.Navigator>
  )
}

export default Routes
