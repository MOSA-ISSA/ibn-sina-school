import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import getImages from '../images/_images'
// import Images from '../../assets/images/IMAGES'
const Laya = () => {
  return (
    <ImageBackground source={getImages.SHIRT1()}
      style={{ width: '100%', height: '100%', }}>
      <View style={styles.container}>
        <Text style={styles.name}> laya store </Text>
        <Text style={styles.name}> 300$  </Text>
      </View>
    </ImageBackground>
  )
}

export default Laya

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    // backgroundColor: "black"
  },
  name: {
    color: "red",
    fontSize: 20,
    alignSelf: "center",
    backgroundColor: "#45454595",
    width: 120,
    height: 60,
    textAlign: 'center',
    padding: 10,
  }

})  
