import { Text, TouchableOpacity, Image } from 'react-native'
import styles from '../styles/menuItemStyles'

const MenuItem = ({ navigation, screen, icon, title }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(screen)} style={styles.option}>
      <Image source={icon} style={styles.icon} />
      <Text numberOfLines={1} ellipsizeMode='tail' style={styles.title}>{ title }</Text>
    </TouchableOpacity>
  )
}

export default MenuItem
