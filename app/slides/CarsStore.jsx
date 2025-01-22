import { StyleSheet, Image, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import getImages from '../images/_images'

const size = Dimensions.get('window');


const CarsStore = () => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Text style={{ color: "#000", marginVertical: 5 }}>search</Text>
        <Ionicons name='search-outline' color={'black'} size={20} />
      </View>

      <View style={styles.card}>
        <View style={styles.info}>
          <Text style={styles.Text}>name:gclass</Text>
          <Text style={styles.Text}>price: 2500000</Text>

        </View>

        <View style={styles.img}>
          <Image source={getImages.gclass()} style={styles.image} />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.info}>
          <Text style={styles.Text}>name:maclaren</Text>
          <Text style={styles.Text}>price: 1000000</Text>

        </View>

        <View style={styles.img}>
          <Image source={getImages.maclaren()} style={styles.image} />
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.info}>
          <Text style={styles.Text}>name:ferrari</Text>
          <Text style={styles.Text}>price: 2000000</Text>

        </View>

        <View style={styles.img}>
          <Image source={getImages.ferrari()} style={styles.image} />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.info}>
          <Text style={styles.Text}>name:rang rover</Text>
          <Text style={styles.Text}>price: 500000</Text>

        </View>

        <View style={styles.img}>
          <Image source={getImages.land()} style={styles.image} />
        </View>
      </View>


      <View style={styles.card}>
        <View style={styles.info}>
          <Text style={styles.Text}>name:bmw</Text>
          <Text style={styles.Text}>price: 200000</Text>

        </View>

        <View style={styles.img}>
          <Image source={getImages.bmw1()} style={styles.image} />
        </View>
      </View>
    </View>
  )
}

export default CarsStore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%'
  },
  search: {
    borderWidth: 1,
    width: "90%",
    // height: 20,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: 'lightgray',
    elevation: 5,
    width: "90%",
    height: size.height * 0.135,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",

    marginVertical: 20
  },
  info: {

    width: "60%",
    height: "100%",
    justifyContent: "center",
    //alignItems: "flex-end",
    padding: 20,

  },
  img: {


    width: "40%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  Text: {
    fontSize: 20,
    color: "black"
  }
})
