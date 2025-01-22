import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import getImages from '../images/_images'

const size = Dimensions.get('window')

const Best = () => {
  return (
    <View style={styles.con}>
      <Text style={styles.txt}> best players </Text>

      <Image style={styles.sora} source={getImages.r()} />

      <Text style={styles.txt}>200$</Text>

      <Image style={styles.sora} source={getImages.mappe()} />
      <Text style={styles.txt}>mappe</Text>

      <Image style={styles.sora} source={getImages.cr7()} />
      <Text style={styles.txt}>cr7</Text>

      <Image style={styles.sora} source={getImages.pono()} />

      <Text style={styles.txt}>pono</Text>

    </View>
  )
}

export default Best

const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center"
  },
  sora: {
    width: size.height * 0.17,
    height: size.height * 0.15,
  },
  txt: {
    color: 'white',
    fontSize: 35
  }
})




