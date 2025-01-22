import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { EvilIcons, FontAwesome, FontAwesome6 } from '@expo/vector-icons'

const Play = () => {
  return (
    <View style={styles.con}>
      <View style={styles.box}>
        <EvilIcons name="search" size={24} color="black" />
        <TextInput placeholder='search' placeholderTextColor={"gray"} style={styles.search} />
      </View>



      <View style={{
        flex: 0.95,
        backgroundColor: '#45454550',
        width: '80%',
        margin: 25,
        borderRadius: 10
      }}>

      </View>

      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>
        <FontAwesome6 name="house-chimney" size={24} color="black" />
        <FontAwesome6 name="play" size={24} color="black" />
        <FontAwesome name="camera" size={24} color="black" />
        <EvilIcons name="user" size={30} color="black" />
      </View>

    </View>
  )
}

export default Play

const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: "white",
    // justifyContent:"center",
    paddingTop: 45,

    alignItems: "center"
  },
  ksnap: {
    fontSize: 17
  },
  search: {
  },
  box: {
    borderWidth: 1,
    height: 40,
    width: "90%",
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 10,
  }
})