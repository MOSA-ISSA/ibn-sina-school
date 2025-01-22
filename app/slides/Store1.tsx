import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import getImages from '../images/_images'

const size = Dimensions.get('window');

const Store1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Text>search</Text>
        <Ionicons name='search-outline' size={25} />
      </View>

      <View style={styles.card}>
        <View style={styles.item}>
          <Text style={styles.txt}>thats a new mascara it give you a perfect eyelashes</Text>
        </View>
        <View style={styles.item}>
          <Image source={getImages.mascara()} style={styles.img} />
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.item}>
          <Text style={styles.txt}>thats a new lip gloss it is so beautiful</Text>
        </View>
        <View style={styles.item}>
          <Image source={getImages.lipproduct()} style={styles.img} />
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.item}>
          <Text style={styles.txt}>thats a new poder it is so nice</Text>
        </View>
        <View style={styles.item}>
          <Image source={getImages.poder()} style={styles.img} />
        </View>
      </View>
    </View>
  )
}

export default Store1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    justifyContent: 'center',
  },
  search: {
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: "row",
    width: "90%",
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5
  },
  card: {
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: "row",
    width: "90%",
    height: size.height * 0.20,
    alignSelf: 'center',
    margin: 20
  },
  img: {
    width: 190,
    height: 190,
    borderRadius: 10,
  },
  txt: {
    fontSize: 25,
    color: "purple"
  },
  item: {
    width: "50%",
    height: "100%",
  }

})



