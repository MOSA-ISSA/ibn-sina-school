import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import getImages from '../images/_images'

const FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>football-gameday</Text>
      <Text style={styles.almwdo3}>the match</Text>

      <View style={styles.brwaz}>
        <Image source={getImages.barca()} style={styles.Images} />
        <Text style={styles.rkm}>5-2</Text>
        <Image source={getImages.real()} style={styles.real} />
      </View>

    </View>
  )
}

export default FC

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flex: 1,
    // justifyContent: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: 'black'
  },
  almwdo3: {
    color: 'white',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    // marginRight: 350,
    fontSize: 20
  },
  brwaz: {
    width: '95%',
    height: 90,
    borderWidth: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10
  },
  Images: {
    width: 80,
    height: 84,
    borderRadius: 5
  },
  real: {
    width: 80,
    height: 84,
    borderRadius: 5
  },
  rkm: {
    fontSize: 50
  }


})