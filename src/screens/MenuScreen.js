import { useEffect } from 'react'
import { ScrollView, View, useWindowDimensions } from 'react-native'
import styles from '../styles/screens/menuScreen'
import menus from '../menus'
import MenuItem from '../components/items/MenuItem'

const MenuScreen = ({ route, navigation }) => {
  const menuItems = menus[route.params.menu]

  let screenWidth = useWindowDimensions().width
  // 20 is the container padding.
  // 100 + 20 is the item's width + margin.
  let nItemsInRow = Math.trunc((screenWidth - 20) / (100 + 20))
  let nItemsInLastRow = menuItems.length % nItemsInRow
  if(nItemsInLastRow === 0)
    nItemsInLastRow = nItemsInRow
  let nEmptyItemsToAdd = nItemsInRow - nItemsInLastRow

  useEffect(() => {
    navigation.setOptions({ title: route.params.screenTitle })
  }, [])
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.childContainer}>
        
        {menuItems.map((item, index) =>
          <MenuItem
            item={item}
            key={index}
          />
        )}

        {Array.from({length: nEmptyItemsToAdd}).map((_, i) =>
          <View style={styles.empty} key={i} />
        )}

      </View>
    </ScrollView>
  )
}

export default MenuScreen
