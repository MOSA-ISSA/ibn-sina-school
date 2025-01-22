import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Firstbox = () => {
  return (
    <View style={styles.con}>

      <View style={styles.search}>
        <Text style={styles.txt}>search</Text>
      </View>

      <View style={styles.firstbox}>
        <View style={styles.box}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
        <View style={styles.box}><ActivityIndicator size="large" color="#fff" /></View>

      </View>
      <View style={styles.firstbox}>
        <View style={styles.box}><ActivityIndicator size="large" color="#fff" /></View>
        <View style={styles.box}><ActivityIndicator size="large" color="#fff" /></View>

      </View>
      <View style={styles.firstbox}>
        <View style={styles.box}><ActivityIndicator size="large" color="#fff" /></View>
        <View style={styles.box}><ActivityIndicator size="large" color="#fff" /></View>

      </View>




    </View>
  )
}

export default Firstbox

const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: 'pink',
  },
  txt: {
    fontSize: 30,
    color: "black",
  },
  search: {
    width: "70%",
    height: "6%",
    borderWidth: 2,
    borderColor: "black",
    alignSelf: 'center',
    marginTop: 10,

  },
  box: {
    width: "40%",
    height: "60%",
    borderWidth: 2,
    borderColor: "black",
    marginTop: 40,
    justifyContent:'center',
    alignItems:'center'
  },
  firstbox: {
    width: "90%",
    height: "30%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,

  }

})

