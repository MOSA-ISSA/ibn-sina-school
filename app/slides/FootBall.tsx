import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import getImages from '../images/_images'

const size = Dimensions.get('window');

const FootBall = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.ball}>foot Ball</Text>
      <Image source={getImages.Bellingham()} style={styles.img} />

      <View style={styles.row}>

        <View style={styles.box}>
          <Text style={styles.ball}> Ball</Text>
          <Text style={styles.ball}> اي لاعب تريد الافضل في العالم</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.ball}>the best</Text>
          <Text style={styles.ball}>تلصيق صور</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.ball}>player</Text>
          <Text style={styles.ball}>بيع صور</Text>
          <Text style={styles.ball}></Text>

        </View>

      </View>
    </View>
  )
}

export default FootBall

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  ball: {
    fontSize: 25,
    color: 'blue',
    textAlign: 'center'
  },
  img: {
    height: size.height * 0.6,
    width: "100%",
    resizeMode: 'contain'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  box: {
    // height: 200,
    width: size.width * 0.28,
    borderWidth: 2,
    borderColor: '#fff',
    margin: 10,
    borderRadius: 10,
    padding: 4,
    paddingVertical: 8,
    alignItems: 'center'
  }
})