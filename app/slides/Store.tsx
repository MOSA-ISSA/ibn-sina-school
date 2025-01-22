import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import getImages from '../images/_images'

const size = Dimensions.get('window');

const Store = () => {
  return (
    <View style={styles.container} >

      <View style={styles.search}>
        <Text > search</Text>
        <Ionicons name='search-outline' size={30} />
      </View>

      <View style={styles.card}>
        <View style={styles.item}>
          <Text style={styles.txt}>this lip balm mosturizes and dehaydrates lips </Text>

          <Text style={styles.txt}>BUY</Text>
        </View>
        <View style={styles.item}>
          <Image source={getImages.lipbalm()} style={styles.img} />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.item}>
          <Text style={styles.txt}>this toner mosturizes and dehaydrates your skin </Text>
          <Text style={styles.txt}>BUY</Text>
        </View>
        <View style={styles.item}>
          <Image source={getImages.toner()} style={styles.img} />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.item}>
          <Text style={styles.txt}>this serum helps you get rid of acne and dehaydrates your skin </Text>
          <Text style={styles.txt}>BUY</Text>
        </View>
        <View style={styles.item}>
          <Image source={getImages.serum()} style={styles.img} />
        </View>
      </View>

    </View>
  )
}

export default Store

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    paddingVertical: 10,
    justifyContent: 'center'
  },
  search: {
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    alignSelf: 'center',
    padding: 5,
    paddingHorizontal: 20
  },
  card: {
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    height: size.height * 0.22,
    alignSelf: 'center',
    marginVertical: 30,
    padding: 2
  },
  img: {
    width: "100%",
    height: "100%",
  },
  txt: {
    fontSize: 20,
    padding: 5
  },
  item: {
    width: "50%",
    height: "100%",
    // padding:5
  }


})