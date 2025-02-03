import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Entypo, FontAwesome5, Fontisto, Ionicons } from '@expo/vector-icons'

const ImageWithLoader = ({ uri }) => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.imageContainer}>
      {loading && <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />}
      <Image
        style={styles.image}
        source={{ uri }}
        onLoadEnd={() => setLoading(false)}
      />
    </View>
  );
};

const ImageBox = () => {
  const images = [
    "https://img.ltwebstatic.com/images3_pi/2024/03/07/7d/1709822250bbfa8768e37134162c5e5c05630c13de_thumbnail_900x.jpg",
    "https://i.etsystatic.com/18707863/r/il/91389a/4314054933/il_300x300.4314054933_szup.jpg",
    "https://e7.pngegg.com/pngimages/146/195/png-clipart-real-madrid-c-f-uefa-champions-league-t-shirt-la-liga-jersey-t-shirt-tshirt-sport.png",
  ];

  return (
    <View style={styles.container}>
      {images.map((uri, index) => (
        <ImageWithLoader key={index} uri={uri} />
      ))}
    </View>
  );
};

const size = Dimensions.get('window');
const Menu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Text >Search</Text>
        <Ionicons name='search-outline' style={styles.larin} />

      </View>

      <View style={styles.menu}>

        <Text>الكل</Text>
        <Text>البنات</Text>

        <Text>الاولاد</Text>
        <Text>حقائب</Text>
      </View>

      <View style={styles.menu}>
        <Fontisto name="sunglasses-alt" size={24} color="black" />
        <Entypo name="flower" size={24} color="black" />
        <FontAwesome5 name="tshirt" size={24} color="black" />
        <FontAwesome5 name="shopping-bag" size={24} color="black" />
      </View>
      <ImageBox />
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 80
  },
  search: {
    borderWidth: 1,
    padding: 10,
    width: 290,
    flexDirection: "row"
  },
  larin: {
    marginLeft: 'auto'
  },
  menu: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    // borderWidth:1 , 
    width: '50%',
    marginTop: 10
  },
  icons: {
    flexDirection: 'row'
  },
  imageContainer: {
    margin: 10,
    position: "relative",
    height: 150,
    width: 150,
  },
  loader: {
    position: "absolute",
    alignSelf: "center",
    top: "50%",
    transform: [{ translateY: -12 }],
  },
  image: {
    height: size.height * 0.15,
    width: size.height * 0.15,
    resizeMode: "cover",
  },
})
