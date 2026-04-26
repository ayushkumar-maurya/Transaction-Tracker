import { createNativeStackNavigator } from '@react-navigation/native-stack'

import styles from '../styles/components/routes'
import MenuScreen from '../screens/MenuScreen'
import CategoriesScreen from '../screens/CategoriesScreen'
import EditCategoryScreen from '../screens/EditCategoryScreen'

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

    <Stack.Screen name='Categories' component={CategoriesScreen}
      options={{ ...headerStyles }}
    />

    <Stack.Screen name='EditCategory' component={EditCategoryScreen}
      options={{ ...headerStyles }}
    />

  </Stack.Navigator>
  )
}

export default Routes
