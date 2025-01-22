import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import getImages from '../images/_images';

const Shaker2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Name</Text>
      <Text style={styles.give}>Give</Text>
      <Text style={styles.s}>0.00$</Text>
      <Text style={styles.request}>Request</Text>
      <Image style={styles.image} source={getImages.shaker2()} />
    </View>
  );
};

export default Shaker2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  name: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  give: {
    fontSize: 30,
    color: 'blue',
    marginBottom: 10,
  },
  s: {
    fontSize: 30,
    color: 'green',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    marginBottom: 20,
  },
  request: {
    fontSize: 30,
    color: 'red',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: 10,
  },
});
