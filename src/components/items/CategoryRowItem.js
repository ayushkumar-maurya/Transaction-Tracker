import { TouchableOpacity, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../../styles/components/items/categoryRowItem'
import { currencyFormatter } from '../../utils/currency'

const CategoryRowItem = ({ category, index, updateInfo }) => {
  const navigation = useNavigation()

  return (
    <>
      { index > 0 && <View style={styles.line} /> }
      <TouchableOpacity onPress={() => navigation.navigate('EditCategory', {...updateInfo, category})} style={styles.item}>
        <View style={styles.infoContainer}>
          <Text numberOfLines={1} ellipsizeMode='tail' style={styles.name}>{ category.name }</Text>
          { category.description && <Text numberOfLines={1} ellipsizeMode='tail' style={styles.desc}>{ category.description }</Text> }
        </View>
        <View style={styles.amtContainer}>
          <Text
            numberOfLines={1}
            style={[styles.amt, category.amount < 0 ? styles.negativeAmt : styles.positiveAmt]}
          >
            { `${currencyFormatter.format(category.amount)}` }
          </Text>
        </View>
      </TouchableOpacity>
    </>
  )
}

export default CategoryRowItem
