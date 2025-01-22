import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import getImages from '../images/_images'

const size = Dimensions.get('window');

const Messi = () => {
  return (
    <View>
      <Text style={styles.footballPlayersText}>best football player </Text>
      <Text style={styles.footballPlayer}> Inter Miami and Argentina star Lionel Messi is the best men’s soccer player in the world for the second straight year.best football player is Lionel Andres Messi </Text>
      <Image source={getImages.messi()} style={styles.img} />
    </View>
  )
}
export default Messi

const styles = StyleSheet.create({
  footballPlayersText: {
    fontSize: 60,
    textAlign: 'center',
  },

  footballPlayer: {
    fontSize: 25,
    color: 'blue',
    textAlign: 'center',
  },
  img: {
    width: '100%',
    height: size.height * 0.5,
    marginVertical: 20,
    borderRadius: 20
  },
})


