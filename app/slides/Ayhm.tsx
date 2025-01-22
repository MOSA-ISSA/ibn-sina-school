import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import getImages from '../images/_images'

const Ayhm = () => {
  return (
    <View style={styles.ayhm}>
      <View style={styles.cover}>
        <Image source={getImages.a1()} style={styles.img} />
        <View style={styles.box1}>
          <Text style={styles.txt}>فرع احذية كرة قدم  </Text>
        </View>
        <Image source={getImages.a2()} style={styles.img} />

      </View>

      <View style={styles.cover}>

        <Image source={getImages.a3()} style={styles.img} />
        <View style={styles.box1}>
          <Text style={styles.txt}>فرع ملابس كرة قدم  </Text>
        </View>
        <Image source={getImages.a4()} style={styles.img} />

      </View>

      <View style={styles.cover}>
        <Image source={getImages.a5()} style={styles.img} />
        <View style={styles.box1}>
          <Text style={styles.txt}>فرع كراة كرة قدم </Text>
        </View>
        <Image source={getImages.a6()} style={styles.img} />
      </View>


      <View style={styles.cover}>
        <Image source={getImages.a7()} style={styles.img} />
        <View style={styles.box1}>
          <Text style={styles.txt}>فرع كوس كرة قدم</Text>
        </View>
        <Image source={getImages.a8()} style={styles.img} />
      </View>

    </View>
  )
}

export default Ayhm

const styles = StyleSheet.create({
  ayhm: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  box1: {
    height: "50%",
    width: '50%',
    backgroundColor: 'white',
    marginVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: "50%",
    width: '25%',
    backgroundColor: 'white',
    marginVertical: 50,
    resizeMode: 'cover',
  },
  txt: {
    fontSize: 25
  },
  cover: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
  }
})