import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import getImages from '../images/_images'

const Earth = () => {
  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10
      }}>
        <Text style={styles.txt}>Geo Quizes</Text>
        <Image source={getImages.earth()} style={styles.pic} />
      </View>
      <View style={styles.txt2} />
      <Text style={styles.txt3}>difficulty:-</Text>
      <Text style={styles.txt1}>△ Easy</Text>
      <Text style={styles.txt3}>time:-</Text>
      <Text style={styles.txt1}>△ 20min</Text>
      <Text style={styles.txt3}>level:-</Text>
      <Text style={styles.txt1}>△ Beginner</Text>
    </View>
  )
}


export default Earth

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeebff',
    paddingHorizontal: 10,
  },
  txt: {
    color: 'teal',
    fontSize: 30,
  },
  txt1: {
    color: 'green',
    fontWeight: 'bold',
  },
  txt2: {
    backgroundColor: 'teal',
    width: '100%',
    padding: 1,
    marginBottom: 20
  },
  txt3: {
    fontSize: 17,
  },
  pic: {
    width: "50%",
    resizeMode: 'contain',
  }
})