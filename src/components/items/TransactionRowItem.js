import { TouchableOpacity, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../../styles/components/items/transactionRowItem'
import { currencyFormatter } from '../../utils/currency'

const TransactionRowItem = ({ transaction, index, updateInfo }) => {
  const navigation = useNavigation()

  return (
    <>
      { index > 0 && <View style={styles.line} /> }

      <TouchableOpacity onPress={() => navigation.navigate('EditTransaction', {...updateInfo, transaction})} style={styles.item}>

        <View style={styles.infoContainer}>
          <View style={styles.infoSecionContainer}>
            <Text numberOfLines={1} style={styles.date}>{ transaction.date }</Text>
            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.category}>{ transaction.category_name }</Text>
          </View>
          { transaction.description && <Text numberOfLines={2} ellipsizeMode='tail' style={styles.desc}>{ transaction.description }</Text> }
          { transaction.remark && <Text numberOfLines={2} ellipsizeMode='tail' style={styles.remark}>{ transaction.remark }</Text> }
        </View>

        <View style={styles.amtContainer}>
          <Text numberOfLines={1} style={styles.amt}>{ currencyFormatter.format(transaction.deposit > 0 ? transaction.deposit : transaction.withdrawal) }</Text>
        </View>

      </TouchableOpacity>
    </>
  )
}

export default TransactionRowItem
