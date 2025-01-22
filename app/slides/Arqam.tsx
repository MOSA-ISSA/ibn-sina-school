import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons'
import getImages from '../images/_images';

const size = Dimensions.get('window');

const Arqam = () => {
  return (
    <View style={styles.arqam}>
      <FontAwesome6 name="bars" size={50} color="white" />
      <View style={styles.steet1}>
        <Image source={getImages.car()} style={styles.car} />
      </View>

      <View style={styles.row}>

        <View style={styles.box}>
          <Text style={styles.text}>
            شراء سيارات
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>
            تعديلات للسيارة
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>
            تغيير لون السيارة
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text1}>
            العب
          </Text>
        </View>


      </View>
      <Text style={styles.text2}>
        online
      </Text>
    </View>
  )
}

export default Arqam

const styles = StyleSheet.create({
  arqam: {
    height: size.height,
    backgroundColor: 'black',
    justifyContent: 'space-around'
  },
  car: {
    height: size.height * 0.4,
    width: '100%',
    resizeMode: 'contain'
  },
  steet1: {
    width: "100%",
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    height: 100,
    width: 100,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 20,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: "white",
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row'
  },
  text1: {
    fontSize: 20,
    color: "white"
  },
  text2: {
    fontSize: 100,
    color: "white",
    textAlign: 'center'
  }
})