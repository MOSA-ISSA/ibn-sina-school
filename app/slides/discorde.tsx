import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import getImages from '../images/_images'

const size = Dimensions.get('window');

const Discorde = () => {
  return (
    <View style={styles.con}>

      <View style={styles.box}>
        <Text style={styles.txt}>discorde</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Image style={styles.i} source={getImages.img1()} />
      </View>
    </View>
  )
}

export default Discorde

const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: 'purple',
  },
  txt: {
    fontSize: 60,
    color: "gold",
    alignSelf: 'center',
  },
  box: {
    alignSelf: 'center',
    width: "70%",
    height: "10%",
    borderBlockColor: "black",
    borderWidth: 2,
    marginTop: 10,

  },
  i: {
    width: size.width * 0.7,
    height: size.height * 0.4,
    alignSelf: 'center',
    // justifyContent:
  }
})