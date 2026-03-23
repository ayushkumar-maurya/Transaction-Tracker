import { createNativeStackNavigator } from '@react-navigation/native-stack'

import styles from '../styles/components/routes'
import MenuScreen from '../screens/MenuScreen'
import AddCategoryScreen from '../screens/AddCategoryScreen'

const Routes = () => {
  const Stack = createNativeStackNavigator()

  const headerStyles = {
    headerStyle: styles.header.style,
    headerTintColor: styles.header.tintColor
  }

  return (
  <Stack.Navigator initialRouteName='Menu'>

    <Stack.Screen name='Menu' component={MenuScreen} initialParams={{ screenTitle: 'Home', menu: 'home' }}
      options={{ ...headerStyles }}
    />

    <Stack.Screen name='AddCategory' component={AddCategoryScreen}
      options={{ ...headerStyles }}
    />

  </Stack.Navigator>
  )
}

export default Routes
