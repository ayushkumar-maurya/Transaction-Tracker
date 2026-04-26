import { TouchableOpacity, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../../styles/components/items/categoryRowItem'

const CategoryRowItem = ({ category, index, updateInfo }) => {
  const navigation = useNavigation()

  return (
    <>
      { index > 0 && <View style={styles.line} /> }
      <TouchableOpacity onPress={() => navigation.navigate('EditCategory', {...updateInfo, category})} style={styles.item}>
        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.name}>{ category.name }</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.desc}>{ category.description }</Text>
      </TouchableOpacity>
    </>
  )
}

export default CategoryRowItem
