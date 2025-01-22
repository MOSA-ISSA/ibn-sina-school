import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import getImages from "../images/_images";

const size = Dimensions.get('window')

const NvidiaGPU = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.containerH}>
        <Text style={styles.header}>Nvidia GPU</Text>
        <Image style={styles.img} source={getImages.nvidia()} />
      </View>
      <View style={{ flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.container}>
          <Text style={styles.text}>RTX 3060</Text>
          <Image style={styles.img} source={getImages.rtx3060()} />
          <Text style={styles.price}>$1265</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>RTX 4090</Text>
          <Image style={styles.img} source={getImages.rtx4090()} />
          <Text style={styles.price}>$3600</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>RTX 5060</Text>
          <Image style={styles.img} source={getImages.rtx5090()} />
          <Text style={styles.price}>$4000</Text>
        </View>

      </View>
    </View>
  );
};

export default NvidiaGPU;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    // padding: 20,
    // paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  containerH: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: "90%",
    height:size.height*0.22
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "#555",
    flex: 1,
  },
  img: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
    resizeMode: "contain",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#008000",
  },
});
