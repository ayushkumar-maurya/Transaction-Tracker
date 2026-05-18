import { TouchableOpacity, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../../styles/components/items/transactionRowItem'

const TransactionRowItem = ({ index }) => {
  const navigation = useNavigation()

  return (
    <>
      { index > 0 && <View style={styles.line} /> }

      <TouchableOpacity onPress={() => console.log('Pressed')} style={styles.item}>

        <View style={styles.infoContainer}>
          <View style={styles.infoSecionContainer}>
            <Text numberOfLines={1} style={styles.date}>{ '8888-99-00' }</Text>
            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.category}>{ 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima consequuntur excepturi placeat laudantium? Inventore voluptatibus fugiat nemo voluptates quia mollitia!' }</Text>
          </View>
          <Text numberOfLines={2} ellipsizeMode='tail' style={styles.desc}>{ 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima consequuntur excepturi placeat laudantium? Inventore voluptatibus fugiat nemo voluptates quia mollitia!' }</Text>
          <Text numberOfLines={2} ellipsizeMode='tail' style={styles.remark}>{ 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima consequuntur excepturi placeat laudantium? Inventore voluptatibus fugiat nemo voluptates quia mollitia!' }</Text>
        </View>

        <View style={styles.amtContainer}>
          <Text numberOfLines={1} style={styles.amt}>{ '4005484.00' }</Text>
        </View>

      </TouchableOpacity>
    </>
  )
}

export default TransactionRowItem
