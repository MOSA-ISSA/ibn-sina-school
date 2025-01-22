import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import getImages from '../images/_images'

const CarLogo = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image style={styles.sora} source={getImages.carLogo()} />
      <View style={styles.square} ></View>
      <View style={styles.square} ></View>
      <View style={styles.square} ></View>
      <View style={styles.square} ></View>
      <View style={styles.square} ></View>
      <View style={styles.square} ></View>
    </View>
  )
}

export default CarLogo

const styles = StyleSheet.create({
  sora: {
    width: "100%",
    height: 300,
  },
  square: {
    borderWidth: 1,
    width: "100%",
    flex: 1
  },
})