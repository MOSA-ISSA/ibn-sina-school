import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import getImages from '../images/_images';

const size = Dimensions.get('window');

const Movies = () => {
  return (
    <View style={styles.container}>

      <View style={styles.search} >
        <Text >search</Text>
        <Ionicons name='search-outline' color={"black"} size={35} />
      </View>

      <View style={styles.card}>
        <View style={styles.item}>
          <Image source={getImages.a11()} style={styles.img} />
        </View>
        <View style={styles.item}>
          <Image source={getImages.a12()} style={styles.img} />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.item}>
          <Image source={getImages.a13()} style={styles.img} />
        </View>
        <View style={styles.item}>
          <Image source={getImages.bmw1()} style={styles.img} />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.item}>
          <Image source={getImages.a01()} style={styles.img} />
        </View>
        <View style={styles.item}>
          <Image source={getImages.Bellingham()} style={styles.img} />
        </View>
      </View>




    </View>
  )
}

export default Movies

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    paddingVertical: 10,
    justifyContent: 'center'
  },
  search: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "95%",
    alignSelf: "center",
    padding: 5,
    paddingHorizontal: 20
  },

  card: {
    //borderWidth: 1,
    borderColor: "black",

    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "95%",
    height: size.height * 0.2,
    alignSelf: "center",
    margin: 30

  },
  item: {
    borderWidth: 1,
    width: "45%",
    height: "100%",
    borderRadius: 30,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
    resizeMode:"stretch"
  }
})