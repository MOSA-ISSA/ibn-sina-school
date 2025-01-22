import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import getImages from '../images/_images'

const Hotel = () => {
  return (

    <View style={styles.container} >
      <View style={{height: "50%", alignItems: 'center'}}>
        <Text style={styles.TEXT}>The best hotel</Text>
        <Text style={styles.in}> check in at 12:00</Text>
        <Text style={styles.center} >we have restaurants,pools,rooms and cheap price</Text>
      </View>
      <Image style={styles.hotel} source={getImages.hotel()} />
    </View>
  )
}

export default Hotel

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  TEXT: {
    fontSize: 60,
    marginTop: 40,
    color: 'blue',
    fontWeight: 500
  },
  center: {
    fontSize: 35,
    color: 'blue',
    fontWeight: 500,
    marginTop: 50,
    marginBottom: 50,
    textAlign: 'center',
  },
  hotel: {
    width: "100%",
    height: "50%",

  },
  in: {
    fontSize: 40

  }
})                                                                                       