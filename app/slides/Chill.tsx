import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import getImages from '../images/_images'

const size = Dimensions.get('window');

const Chill = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={getImages.chill()} />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txt}>tap for 1 $</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Chill

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },

  txt: {
    fontSize: size.fontScale * 50
  },
  btn:{
    marginTop: 50,
    borderRadius:5,
    alignItems: "center",
    backgroundColor: "#F2C94C",
    padding: 10
  },
  img:{
    width: size.width,
    height: size.height*0.65
  }
})