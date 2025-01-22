import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import getImages from '../images/_images'
// import Images from '@/assets/images/Images'

const Doctor = () => {
  return (
    <View style={styles.con}>
      <Text style={styles.txt} >doctor zeen</Text>
      <Text style={styles.txt}>050-8888-888</Text>
      <Image style={styles.i} source={getImages.chair()}></Image>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>مرحبا بكم في عيادة الاسنان تتكون هذه العيادة من اجهزة كثيرة ومثيرة للاهتمام</Text>
    </View>
  )
}

export default Doctor

const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 4,
    padding: 20,
  },
  txt: {
    fontSize: 30,
    color: "red",
    alignSelf: 'center',
  },
  box: {
    width: "70%",
    height: "40%",
    borderWidth: 1,
  }, i: {
    width: "100%",
    height: "50%",
    borderRadius: 20
  }

})