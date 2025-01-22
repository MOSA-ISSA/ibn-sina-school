import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import getImages from '../images/_images';

const HAMZA = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.name}>HAMZA CAR</Text>

        {[
          {
            image: getImages.bmw_(),
            name: 'BMW',
            price: '350,000',
            color: 'Gray',
          },
          {
            image: getImages.lamborghini_(),
            name: 'Lamborghini',
            price: '1,500,000',
            color: 'Orange',
          },
          {
            image: getImages.supra_(),
            name: 'Supra',
            price: '750,000',
            color: 'Red',
          },
          {
            image: getImages.ferrari_(),
            name: 'Ferrari',
            price: '660,000',
            color: 'Yellow',
          },
          {
            image: getImages.mercedes_(),
            name: 'Mercedes',
            price: '450,000',
            color: 'Green Light',
          },
          {
            image: getImages.Ram_(),
            name: 'Ram',
            price: '440,000',
            color: 'Blue',
          },
        ].map((car, index) => (
          <View key={index} style={styles.card}>
            <Image style={styles.sora} source={car.image} />
            <View style={styles.details}>
              <Text style={styles.detailText}>اسم السياره: {car.name}</Text>
              <Text style={styles.detailText}>سعر السياره: {car.price}</Text>
              <Text style={styles.detailText}>لون السياره: {car.color}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HAMZA;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  sora: {
    width: 150,
    height: 100,
    marginRight: 15,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
    backgroundColor: '#333',
    color: 'white',
    marginBottom: 15,
  },
  details: {
    flex: 1,
  },
  detailText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 5,
  },
});
