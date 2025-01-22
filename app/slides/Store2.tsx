import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import getImages from '../images/_images';

const size = Dimensions.get('window');

const Store2 = () => {
  return (
    <View style={styles.con}>
      <Text style={styles.txt}>girls shoes</Text>

      {[
        { image: getImages.shoes1(), price: '98$', name: 'بوت نايك' },
        { image: getImages.shoes2(), price: '98$', name: 'بوت نايك' },
        { image: getImages.shoes3(), price: '98$', name: 'بوت نايك' },
      ].map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <Image source={item.image} style={styles.img} />
          <Text>السعر: {item.price}</Text>
          <Text>الاسم: {item.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default Store2;

const styles = StyleSheet.create({
  con: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  txt: {
    fontSize: 36,
    backgroundColor: 'purple',
    borderRadius: 20,
    height: 70,
    width: '80%',
    textAlign: 'center',
    padding: 10,
    marginBottom: 20,
  },
  img: {
    height: size.height * 0.2,
    width: 180,
    marginBottom: 10,
  },
  itemContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
});
