import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import getImages from '../images/_images'
// import Images from '@/assets/images/Images'

const AnimeTime = () => {
  return (
    <View style={styles.con}>
      <View style={styles.box}>
        <Text style={styles.txt}>ANIME TIME</Text>
        <Image source={getImages.pink()} />

      </View>
    </View>
  )
}

export default AnimeTime

const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: "pink",


  },
  txt: {
    fontSize: 60,
    color: "white",
    marginTop: 2


  },
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop:20,
    alignSelf: 'center',

  },
  box2: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop:20,
    alignSelf: 'center',

  }
})