import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import getImages from '../images/_images'

const size = Dimensions.get('window');

const Youtube = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          alignItems: 'center'
        }}>
        <Text style={styles.txt}>youtube</Text>
        <AntDesign name="youtube" size={40} color="red" ></AntDesign>
      </View>

      <View style={styles.row}>

        <View style={styles.box1}>
          <Image source={getImages.a21()} style={styles.box} />
          <Text style={styles.txtL}>like</Text>
        </View>
        <View style={styles.box1}>
          <Image source={getImages.a22()} style={styles.box} />
          <Text style={styles.txtL}>like</Text>

        </View>
        <View style={styles.box1}>
          <Image source={getImages.a23()} style={styles.box} />
          <Text style={styles.txtL}>like</Text>

        </View>

      </View>

      <Text style={styles.txt}>short</Text>

      <View style={styles.row}>

        <View style={styles.box1}>
          <Image source={getImages.a24()} style={styles.box} />
        </View>

        <View style={styles.box1}>
          <Image source={getImages.a25()} style={styles.box} />

        </View>

        <View style={styles.box1}>
          <Image source={getImages.a26()} style={styles.box} />

        </View>

      </View>

      <View style={styles.row}>

        <View style={styles.box1}>
          <Image source={getImages.a27()} style={styles.box} />

        </View>

        <View style={styles.box1}>
          <Image source={getImages.a28()} style={styles.box} />

        </View>

        <View style={styles.box1}>
          <Image source={getImages.a29()} style={styles.box} />

        </View>

      </View>

    </View>
  )
}

export default Youtube

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 5,
    justifyContent: 'center'
  },
  txtL: { color: "red" },
  txt: {
    color: "red",
    fontSize: 30
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1
  },
  box1: {
    borderWidth: 2,
    borderColor: '#fff',
    margin: 10,
    height: size.height*0.22,
    width: size.width * 0.25,
  },
  box: {
    height: "100%",
    width: "100%",
    // resizeMode: "contain"
  }

})