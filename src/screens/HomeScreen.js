import { ScrollView, View, useWindowDimensions } from 'react-native'
import styles from '../styles/homeScreenStyles'
import MenuItem from '../components/MenuItem'

const HomeScreen = ({ navigation }) => {
  const iconDirPath = '../../assets/home/'
  
  const menuOptions = [
    { screen: 'Bank', icon: require(`${iconDirPath}bank.png`), title: 'Bank' },
    { screen: 'Stock', icon: require(`${iconDirPath}stock.png`), title: 'Stock' }
  ]

  let screenWidth = useWindowDimensions().width
  // 20 is the container padding.
  // 100 + 20 is the item's width + margin.
  let nItemsInRow = Math.trunc((screenWidth - 20) / (100 + 20))
  let nItemsInLastRow = menuOptions.length % nItemsInRow
  if(nItemsInLastRow === 0)
    nItemsInLastRow = nItemsInRow
  let nEmptyItemsToAdd = nItemsInRow - nItemsInLastRow
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.childContainer}>
        
        {menuOptions.map((opt, index) =>
          <MenuItem
            navigation={navigation}
            screen={opt.screen}
            icon={opt.icon}
            title={opt.title}
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

export default HomeScreen
