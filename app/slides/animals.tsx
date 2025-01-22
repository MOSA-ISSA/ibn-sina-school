import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import getImages from '../images/_images';

const size = Dimensions.get('window');

const Animals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Accessories for Animals</Text>

      <View style={styles.Card}>
        <Image style={styles.sora} source={getImages.swara()} />
        <View style={styles.cc}>
          <Text style={styles.txt1}>الاسم اسوارة قطه</Text>
          <Text style={styles.txt1}>السعر: 20$</Text>
          <Text style={styles.txt1}>الحجم: 5</Text>
          <Text style={styles.txt1}>
            اللون: زهري + أسود + أحمر + أزرق + بنفسجي
          </Text>
        </View>
      </View>

      <View style={styles.Card}>
        <Image style={styles.sora} source={getImages.pic2()} />
        <View style={styles.cc}>
          <Text style={styles.txt1}>الاسم علبه طعام قطه</Text>
          <Text style={styles.txt1}>السعر: 60$</Text>
          <Text style={styles.txt1}>اللون: رمادي</Text>
        </View>
      </View>

      <View style={styles.Card}>
        <Image style={styles.sora} source={getImages.pic33()} />
        <View style={styles.cc}>
          <Text style={styles.txt1}>الاسم صندوق للقطه</Text>
          <Text style={styles.txt1}>السعر: 80$</Text>
          <Text style={styles.txt1}>اللون: أبيض + رمادي</Text>
        </View>
      </View>

      <View style={styles.Card}>
        <Image style={styles.sora} source={getImages.cat()} />
        <View style={styles.cc}>
          <Text style={styles.txt1}>الاسم ملابس قطه</Text>
          <Text style={styles.txt1}>السعر: 100$</Text>
          <Text style={styles.txt1}>الحجم: 5</Text>
          <Text style={styles.txt1}>اللون: أبيض + زهري</Text>
        </View>
      </View>

      <View style={styles.Card}>
        <Image style={styles.sora} source={getImages.pic55()} />
        <View style={styles.cc}>
          <Text style={styles.txt1}>الاسم لعبه قطه</Text>
          <Text style={styles.txt1}>السعر: 50$</Text>
          <Text style={styles.txt1}>اللون: أخضر</Text>
        </View>
      </View>
    </View>
  );
};

export default Animals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: size.width * 0.04,
    backgroundColor: 'white',
  },
  txt: {
    fontSize: size.width * 0.06,
    textAlign: 'center',
    backgroundColor: 'pink',
    padding: size.height * 0.01,
    marginBottom: size.height * 0.01
  },
  sora: {
    width: size.width * 0.35,
    height: size.width * 0.22,
    borderRadius: size.width * 0.02,
  },
  Card: {
    flexDirection: 'row',
    padding: size.height * 0.015,
    marginBottom: size.height * 0.015,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: size.width * 0.02,
  },
  txt1: {
    fontSize: 16,
    marginBottom: size.height * 0.008,
  },
  cc: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 1,
    marginLeft: size.width * 0.03,
  },
});
