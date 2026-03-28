import { TouchableOpacity, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../../styles/components/items/categoryRowItem'
import menus from '../../menus'

const CategoryRowItem = ({ item, index }) => {
  const navigation = useNavigation()

  return (
    <>
      { index > 0 && <View style={styles.line} /> }
      <TouchableOpacity onPress={() => navigation.navigate('EditCategory', item)} style={styles.item}>
        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.name}>{ item.name }</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.desc}>{ item.description }</Text>
      </TouchableOpacity>
    </>
  )
}

export default CategoryRowItem
