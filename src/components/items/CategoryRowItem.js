import { TouchableOpacity, Text, View } from 'react-native'
import styles from '../../styles/components/items/categoryRowItem'

const CategoryRowItem = ({ item, index }) => {
  return (
    <>
      { index > 0 && <View style={styles.line} /> }
      <TouchableOpacity style={styles.item}>
        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.name}>{ item.name }</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.desc}>{ item.description }</Text>
      </TouchableOpacity>
    </>
  )
}

export default CategoryRowItem
