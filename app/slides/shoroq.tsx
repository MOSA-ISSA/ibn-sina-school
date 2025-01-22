import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import getImages from '../images/_images';

const size = Dimensions.get('window');

const Shoroq = () => {
  return (
    <View style={styles.con}>
      <Text style={styles.sss}>Shoroq Style</Text>

      <View style={styles.item}>
        <Image style={styles.pic} source={getImages.pic1()} />
        <View style={styles.details}>
          <Text style={styles.txt3}>Name: Dress</Text>
          <Text style={styles.txt3}>Color: Pink</Text>
          <Text style={styles.txt3}>Size: Small</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Image style={styles.pic} source={getImages.pic2()} />
        <View style={styles.details}>
          <Text style={styles.txt3}>Name: Tshirt</Text>
          <Text style={styles.txt3}>Color: Black</Text>
          <Text style={styles.txt3}>Size: Large</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Image style={styles.pic} source={getImages.pic3()} />
        <View style={styles.details}>
          <Text style={styles.txt3}>Name: Tshirt</Text>
          <Text style={styles.txt3}>Color: Black</Text>
          <Text style={styles.txt3}>Size: Medium</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Image style={styles.pic} source={getImages.pic4()} />
        <View style={styles.details}>
          <Text style={styles.txt3}>Name: Unknown</Text>
          <Text style={styles.txt3}>Color: Custom</Text>
          <Text style={styles.txt3}>Size: Custom</Text>
        </View>
      </View>
    </View>
  );
};

export default Shoroq;

const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: 'white',
    padding: size.width * 0.05,
    justifyContent: 'space-evenly',
  },
  sss: {
    fontSize: size.width * 0.08,
    textAlign: 'center',
    marginBottom: size.height * 0.02,
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: size.height * 0.02,
  },
  pic: {
    width: size.width * 0.25,
    height: size.width * 0.25,
    borderRadius: 5,
    marginRight: size.width * 0.05,
  },
  details: {
    flex: 1,
  },
  txt3: {
    fontSize: size.width * 0.045,
    marginBottom: size.height * 0.005,
  },
});
