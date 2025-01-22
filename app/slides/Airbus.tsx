import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import getImages from '../images/_images'

const Airbus = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img1} source={getImages.logo()} />

      <View style={styles.arrange}>
        <Text style={styles.ayham}>انواع طائرات شركة Airbus</Text>

      </View>
      <View style={{ flexDirection: "row", justifyContent: 'space-evenly', alignSelf: 'center', gap: 20 }}>
        <View style={{ flex: 1, width: '100%',padding:10 }}>
          <Text style={styles.plane}> Airbus A310</Text>
          <Image source={getImages.a310()} style={styles.img}></Image>
          <Text style={styles.plane} >Airbus A320</Text>
          <Image source={getImages.a320()} style={styles.img}></Image>
          <Text style={styles.plane} >Airbus A330</Text>
          <Image source={getImages.a330()} style={styles.img}></Image>
        </View>
        <View style={{ flex: 1, alignSelf: 'center' }}>
          <Text style={styles.plane} >Airbus A340</Text>
          <Image source={getImages.a340()} style={styles.img}></Image>
          <Text style={styles.plane} >Airbus A350</Text>
          <Image source={getImages.a350()} style={styles.img}></Image>
          <Text style={styles.plane}  >Airbus A380</Text>
          <Image source={getImages.a380()} style={styles.img}></Image>
        </View>
      </View>
    </View>

  )
}

export default Airbus

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    padding:10
  },

  arrange: {
    flexDirection: "row"
  },
  img: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  ayham: {
    fontSize: 42
  },
  plane: {
    fontSize: 18
  },
  img1: {
    width: "100%",
    height: 50
  }
})