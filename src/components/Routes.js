import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/HomeScreen'
import BankScreen from '../screens/Menu/BankScreen'
import bankScreens from '../groupedScreens/bankScreens'
import StockScreen from '../screens/Menu/StockScreen'
import stockScreens from '../groupedScreens/stockScreens'

import routesStyles from '../styles/routesStyles'

const Routes = () => {
  const Stack = createNativeStackNavigator()

  const getScreenOptions = title => {
    return {
      title,
      headerStyle: routesStyles.header.style,
      headerTintColor: routesStyles.header.tintColor
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
