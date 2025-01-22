import { Image, StyleSheet, Text, View, YellowBox } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import getImages from '../images/_images';
// import Images from './../assets/images/images';

const Yazan = () => {
  return (
    <View style={styles.myBg}>
      <View style={styles.secondContainer}>
        <AntDesign name="heart" size={25} color="black" />
        <AntDesign name="message1" size={25} color="black" />
      </View>


      <View style={styles.square}>
        <Image style={{ height: '100%', width: '100%', resizeMode: 'contain' }} source={getImages.yazan()} />
      </View>
      <View style={styles.secondContainer}>
        <Text style={{ color: 'black', fontSize: 25 }}>Instagram</Text>
      </View>
    </View>
  )
}

export default Yazan

const styles = StyleSheet.create({


  myBg: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    flexDirection: 'column-reverse'
  },
  square: {
    width: '80%',
    height: '50%',
    borderWidth: 3,
    borderRadius: 5,
    alignSelf: 'center',
  },
  secondContainer: {
    flexDirection: 'row',
    // justifyContent: "space-between",
    width: '80%',
    alignSelf: 'center',
    gap: 20
  },
});


