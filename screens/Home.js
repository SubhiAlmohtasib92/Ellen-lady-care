import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { colors, fonts, images, perfectSize } from '../theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';



const categories = [
  {
    label: 'عناية بالشعر'
  },
  {
    label: 'عناية بالاظافر'
  },
  {
    label: 'مكياج'
  },
  {
    label: 'عطور'
  },
  {
    label: 'هدايا'
  }
  , {
    label: 'شالات'
  }, {
    label: 'كريمات'
  }
];

const products = [
  {
    image: images.productTwo,
    name: 'Facial Cleanser',
    description: 'Oil balancing moisturiser',
    price: '$9.99',
    tags: [
      {
        image: images.vegan
      },
      { image: images.vegan },
      {
        image: images.vegan
      },
      {
        image: images.vegan
      },
      { image: images.vegan },
      {
        image: images.vegan
      }
    ],
    size: '125ml',
    star: 4,
    reviews: 34
  }, {
    image: images.productOne,
    name: 'Facial Cleanser',
    description: 'Oil balancing moisturiser',
    price: '$9.99',
    tags: [
      {
        image: images.vegan
      },
      { image: images.vegan },
      {
        image: images.vegan
      }
    ],
    size: '125ml',
    star: 4,
    reviews: 34
  },
  {
    image: images.productTwo,
    name: 'Facial Cleanser',
    description: 'Oil balancing moisturiser',
    price: '$9.99',
    tags: [
      {
        image: images.vegan
      },
      { image: images.vegan },
      {
        image: images.vegan
      }
    ],
    size: '125ml',
    star: 4,
    reviews: 34
  },
  {
    image: images.productOne,
    name: 'Facial Cleanser',
    description: 'Oil balancing moisturiser',
    price: '$9.99',
    tags: [
      {
        image: images.vegan
      },
      { image: images.vegan },
      {
        image: images.vegan
      }
    ],
    size: '125ml',
    star: 4,
    reviews: 34
  }
]
const Home = ({ navigation }) => {

  const renderCategory = (item, index) => {
    return (
      <View style={{
        marginRight: index === 0 ? 0 : perfectSize(30),
        justifyContent: 'center',
        height: perfectSize(50),
        width: index === 0 ? 120 : 100,
      }}>
        <Text
          style={{
            fontFamily: 'bold',
            textAlign: 'center',
            fontSize: index === 0 ? perfectSize(30) : perfectSize(20),
            fontWeight: 'bold',
            color: index === 0 ? colors.goldColor : colors.purpleColor
          }}>{item.label}</Text>
        <View style={{
          width: '100%',
          height: perfectSize(2),
          marginTop: perfectSize(8),
          backgroundColor: index === 0 ? colors.goldColor : colors.purpleColor,
          position: 'absolute',
          bottom: 1,
        }}
        >

        </View>
      </View>
    )
  };

  const renderProduct = (item, index) => {

    return (
      <TouchableOpacity style={{
        marginLeft: perfectSize(25),
        borderRadius: perfectSize(25),
        backgroundColor: colors.whiteColor,
        height: 200,
        width: Dimensions.get('screen').width - 40,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        shadowOffset: { width: -0, height: 0 },
        shadowColor: colors.goldColor,
        shadowOpacity: 0.5
      }}
        onPress={() => navigation.navigate('ProductDetails', { item: item })}
      >
        <Image
          source={item.image} style={{
            height: '100%',
            width: '100%',
            borderRadius: perfectSize(25),
            resizeMode: 'cover'
          }} />

      </TouchableOpacity >

    )
  };

  // const renderPopular = (item, index) => {
  //   return (
  //     <TouchableOpacity style={{
  //       marginLeft: perfectSize(25),
  //       borderRadius: perfectSize(25),
  //       flexDirection: 'row',
  //       alignItems: 'center',
  //       width: '100%'
  //     }}
  //       onPress={() => navigation.navigate('ProductDetails', { item: item })}
  //     >

  //       <Image source={item.image} style={{
  //         height: perfectSize(80),
  //         width: perfectSize(80),
  //         marginTop: perfectSize(20),
  //         resizeMode: 'contain',
  //         backgroundColor: colors.whiteColor,
  //         borderRadius: perfectSize(20)

  //       }} />

  //       <View style={{
  //         padding: perfectSize(20)
  //       }}>
  //         <Text style={{
  //           fontSize: perfectSize(18),
  //           fontFamily: fonts.AvenirBold,
  //           color: colors.blackColor
  //         }}>{item.name}</Text>

  //         <Text style={{
  //           fontSize: perfectSize(13),
  //           fontFamily: fonts.AvenirBold,
  //           color: colors.greyColor,
  //           marginTop: perfectSize(10),
  //         }}>{item.description}</Text>



  //       </View>
  //       <Text style={{
  //         fontSize: perfectSize(15),
  //         fontFamily: fonts.AvenirBold,
  //         color: colors.blackColor,
  //         marginTop: perfectSize(10),
  //         marginLeft: perfectSize(30)
  //       }}>{item.price}</Text>

  //     </TouchableOpacity >
  //   )
  // }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name={'menu'}
          size={35}
          color={colors.goldColor}
        />
        <Text
          style={{
            fontFamily: 'english',
            color: colors.goldColor,
            fontSize: 30,
          }} >ellen lady care</Text>
        <Ionicons
          name={'notifications-outline'}
          size={35}
          color={colors.goldColor}
        />
      </View>
      <ScrollView
        horizontal={false}
        alwaysBounceVertical={false}
      >
        <View style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <FlatList
            data={products}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => renderProduct(item, index)}
            pagingEnabled
            snapToAlignment='center'
          />
          <View style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: 10,
            justifyContent: 'center'
          }}>
            {
              products.map((item, index) => {
                return <View key={index} style={{
                  height: 10,
                  width: 10,
                  margin: 2,
                  borderRadius: 50,
                  backgroundColor: colors.purpleColor,
                }}>
                </View>
              })}
          </View>

        </View>

        <View style={{
          margin: 10
        }}>
          <Text style={{
            textAlign: 'right',
            fontFamily: 'bold',
            fontSize: 25,
            color: colors.goldColor
          }}>الفئات</Text>
          <FlatList
            pagingEnabled
            inverted
            data={categories}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => renderCategory(item, index)}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View>
          <Text
            style={{
              fontFamily: 'bold',
              fontSize: 25,
              fontWeight: 'bold',
              textAlign: 'right',
              color: colors.goldColor,
              marginTop: 50
            }}>وصلنا حديثاً</Text>
        </View>

      </ScrollView>
      {/* <View style={styles.container} >
        <View style={styles.header}>
          <Ionicons name="person-circle-outline" size={perfectSize(50)} />
          <View style={{
            flexDirection: 'row'
          }}>
            <Ionicons name="search-outline" size={perfectSize(40)} />
            <Ionicons name="grid-outline" size={perfectSize(40)} style={{
              paddingLeft: perfectSize(25)
            }} />
          </View>
        </View>
        <View style={styles.categoriesContainer}>
          <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => renderCategory(item, index)}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <View style={styles.productsContainer}>
          <FlatList
            data={products}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => renderProduct(item, index)}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>


        <View style={styles.popularContainer}>
          <Text style={styles.popularHeader}>{"Popular Items"}</Text>
          <FlatList
            data={products}

            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => renderPopular(item, index)}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View> */}
      <Text>test</Text>
    </SafeAreaView>
  )
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.lightPurple,
  },
  header: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    padding: 10,
  },
  profilePicture: {
    height: perfectSize(50),
    width: perfectSize(50),
    borderRadius: perfectSize(15)
  },
  categoriesContainer: {
    height: perfectSize(40),
    marginTop: perfectSize(40)
  },
  productsContainer: {
    width: '100%',
    height: '50%',
    marginTop: perfectSize(30),
  },
  popularHeader: {
    marginTop: perfectSize(20),
    marginLeft: perfectSize(25),
    fontFamily: fonts.AvertaBold,
    fontSize: perfectSize(18)
  },
  popularContainer: {
    flex: 1,
    width: '100%'
  }
})