import { Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../../styles/components/items/menuItem'

const MenuItem = ({ item }) => {
  const { title, icon, navScreen, navParams, newScreen } = item
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => newScreen ? navigation.navigate(navScreen, navParams) : navigation.push(navScreen, navParams)}
      style={styles.item}
    >
      <Image source={icon} style={styles.icon} />
      <Text numberOfLines={1} ellipsizeMode='tail' style={styles.title}>{ title }</Text>
    </TouchableOpacity>
  )
}

export default MenuItem
