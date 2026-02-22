import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/HomeScreen'
import BankScreen from '../screens/BankScreen'
import bankScreens from '../groupedScreens/bankScreens'
import StockScreen from '../screens/StockScreen'
import stockScreens from '../groupedScreens/stockScreens'

import styles from '../styles/routesStyles'

const Routes = () => {
  const Stack = createNativeStackNavigator()

  const getScreenOptions = title => {
    return {
      title,
      headerStyle: styles.header.style,
      headerTintColor: styles.header.tintColor
    }
  }

  return (
  <Stack.Navigator initialRouteName='Home'>

    <Stack.Screen name='Home' component={HomeScreen}
      options={ getScreenOptions('Home') }
    />

    <Stack.Screen name='Bank' component={BankScreen}
      options={ getScreenOptions('Bank') }
    />

    <Stack.Screen name='BankAddTransaction' component={bankScreens.AddTransactionScreen}
      options={ getScreenOptions('Add Transaction') }
    />

    <Stack.Screen name='Stock' component={StockScreen}
      options={ getScreenOptions('Stock') }
    />

    <Stack.Screen name='StockAddTransaction' component={stockScreens.AddTransactionScreen}
      options={ getScreenOptions('Add Transaction') }
    />

  </Stack.Navigator>
  )
}

export default Routes
