import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { colors, fonts, perfectSize } from '../theme';

import Ionicons from '@expo/vector-icons/Ionicons';

const ProductDetails = ({ route, navigation }) => {

  const renderTags = (item, index) => {
    return (
      <View style={{
        height: perfectSize(100),
        width: perfectSize(100),
        backgroundColor: colors.whiteColor,
        borderRadius: perfectSize(32),
        marginLeft: index === 0 ? 0 : perfectSize(30),
        alignItems: 'center',
        justifyContent: 'center'


      }}>
        <Image source={item.image} style={{
          height: perfectSize(70),
          width: perfectSize(70),
          resizeMode: 'contain'
        }} />

      </View>
    )
  };

  const { name, tags, size, image, price, reviews } = route.params.item;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-sharp" size={perfectSize(40)} />
        </TouchableOpacity>
        <Ionicons name="grid-outline" size={perfectSize(40)} />
      </View>
      <Image source={image} style={styles.productImage}></Image>
      <View style={styles.listContainer}>
        <FlatList
          data={tags}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => renderTags(item, index)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.productDetailsContainer}>
          <View style={styles.productNameContainer}>
            <Text style={styles.productName}>{name}</Text>
            <Text style={styles.productSize}>{`Size: ${size}`}</Text>
          </View>
          <Text style={styles.reviews}>{`${reviews} Reviews`}</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </View>
  )
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.homeBackground
  },
  header: {
    width: '100%',
    paddingTop: '15%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  productImage: {
    height: '50%',
    width: '100%',
    resizeMode: 'contain'
  },
  listContainer: {
    width: '100%',
    top: perfectSize(20),
    alignItems: 'center'

  },
  bottomContainer: {
    width: '100%',
    backgroundColor: colors.whiteColor,
    padding: perfectSize(30),
    flex: 1,
    marginTop: perfectSize(40),
    borderTopLeftRadius: perfectSize(40),
    borderTopRightRadius: perfectSize(40)
  },
  productDetailsContainer: {

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  productNameContainer: {

  },
  productName: {
    fontSize: perfectSize(20),
    color: colors.blackColor,
    fontFamily: fonts.AvenirLTStdRoman,
    fontWeight: 'bold'
  },
  productSize: {
    color: colors.greyColor,
    fontSize: perfectSize(15),
    fontFamily: fonts.AvenirLTStdRoman,
    top: perfectSize(10)
  },
  reviews: {
    color: colors.blackColor,
    fontSize: perfectSize(15),
    fontFamily: fonts.AvenirLTStdRoman,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: perfectSize(40),
    alignItems: 'center'
  },
  price: {
    fontWeight: 'bold',
    fontFamily: fonts.AvenirBold
  }
})