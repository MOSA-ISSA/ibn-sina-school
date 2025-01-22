import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import getImages from '../images/_images'


const Cr7 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>ronaldo info when he was in Manchester United </Text>
      <Text style={styles.txt1}>
        Cristiano Ronaldo dos Santos Aveiro GOIH ComM (Portuguese pronunciation: born 5 February 1985), better known as Ronaldo, is a Portuguese professional footballer who plays as a forward. He is the captain of the Portuguese national team, and he is currently playing at Saudi Arabian football club Al Nassr.
        He is considered to be one of the greatest footballers of all time
      </Text>
      <Image
        style={{
          width: "100%",
          height: "50%",
          resizeMode: 'contain'
        }}
        source={getImages.cr7()} />
    </View>

  )
}

export default Cr7

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  txt: {
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 30
  },
  txt1: {
    textAlign: 'center',
    fontSize: 20
  }
})