import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import getImages from '../images/_images'

const Sport = () => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Text>search</Text>
        <Ionicons name='search-outline' color={"black"} size={20} />
      </View>

      <View style={{ flex: 1, justifyContent: 'center' }}>

        <View style={styles.card}>
          <View style={styles.info}>
            <Text style={styles.text}>name:sport</Text>
            <Text style={styles.text}>price:250</Text>
          </View>
          <Image source={getImages.a01()}
            style={{ height: "100%", width: "60%", resizeMode: "cover" }}
          />
        </View>


        <View style={styles.card}>
          <View style={styles.info}>
            <Text style={styles.text}>sale35%</Text>
            <Text style={styles.text}>5+1</Text>
          </View>
          {/* <View> */}
          <Image source={getImages.a01()}
            style={{ height: "100%", width: "60%", resizeMode: "cover" }}
          />
          {/* </View> */}

        </View>

      </View>

    </View>
  )
}

export default Sport

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    paddingVertical: 10
  },
  search: {
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: "center",
    flexDirection: "row",
    width: "95%",
    height: 50,
    alignSelf: "center",
    paddingHorizontal: 20

  },
  text: {
    fontSize: 20
  }
  ,
  card: {
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "95%",
    height: 200,
    maxHeight: "40%",
    margin: 20,
    alignSelf: "center",
    marginVertical: 40
  },
  info: {
    padding: 20,
    height: "100%",
    width: '40%',
    justifyContent: "center",
    alignItems: "flex-start"
  }
})