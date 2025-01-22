import React, { useEffect, useRef } from 'react';
import { FlatList, StyleSheet, View, Dimensions, Animated, Text } from 'react-native';
import { Entypo } from 'react-native-vector-icons';  // Import the icon component

// Import your slide components
import Rtx from './slides/Rtx';
import CarsStore from './slides/CarsStore';
import Arqam from './slides/Arqam';
import FootBall from './slides/FootBall';
import Ayhm from './slides/Ayhm';
import Sport from './slides/Sport';
import Movies from './slides/Movies';
import Store from './slides/Store';
import Store1 from './slides/Store1';
import Youtube from './slides/Youtube';
import Earth from './slides/Earth';
import Discorde from './slides/discorde';
import Doctor from './slides/Doctor';
import Best from './slides/Best';
import Laya from './slides/Laya';
import Menu from './slides/Menu';
import Play from './slides/Play';
import Messi from './slides/Messi';
import Cr7 from './slides/Cr7';
import Yazan from './slides/Yazan';
import CarLogo from './slides/CarLogo';
import NvidiaGPU from './slides/NvidiaGPU';
import Chill from './slides/Chill';
import Games from './slides/Games';
import Airbus from './slides/Airbus';
import FC from './slides/FC';
import Shaker2 from './slides/shaker';
import HAMZA from './slides/HAMZA';
import Hotel from './slides/Hotel';
import Store2 from './slides/Store2';
import Shoroq from './slides/shoroq';
import Animals from './slides/animals';
import AnimeTime from './slides/AnimeTime';
import Firstbox from './slides/firstbox';

const slides = [
  { id: '1', component: <Rtx /> },
  { id: '2', component: <CarsStore /> },
  { id: '3', component: <Arqam /> },
  { id: '4', component: <FootBall /> },
  { id: '5', component: <Ayhm /> },
  { id: '6', component: <Sport /> },
  { id: '7', component: <Movies /> },
  { id: '8', component: <Store /> },
  { id: '9', component: <Store1 /> },
  { id: '10', component: <Youtube /> },
  { id: '11', component: <Earth /> },
  { id: '12', component: <Discorde /> },
  { id: '13', component: <Doctor /> },
  { id: '14', component: <Best /> },
  { id: '15', component: <Laya /> },
  { id: '16', component: <Menu /> },
  { id: '17', component: <Play /> },
  { id: '18', component: <Messi /> },
  { id: '19', component: <Cr7 /> },
  { id: '20', component: <Yazan /> },
  { id: '21', component: <CarLogo /> },
  { id: '22', component: <NvidiaGPU /> },
  { id: '23', component: <Chill /> },
  { id: '24', component: <Games /> },
  { id: '25', component: <Airbus /> },
  { id: '26', component: <FC /> },
  { id: '27', component: <Shaker2 /> },
  { id: '28', component: <HAMZA /> },
  { id: '29', component: <Hotel /> },
  { id: '30', component: <Store2 /> },
  { id: '31', component: <Shoroq /> },
  { id: '32', component: <Animals /> },
  { id: '33', component: <AnimeTime /> },
  { id: '34', component: <Firstbox /> },
];

const { width, height } = Dimensions.get('window');

const Index = () => {
  const slideDownAnimation = useRef(new Animated.Value(-height)).current;  // Initial position off-screen

  useEffect(() => {
    // Animate the arrow sliding down
    Animated.spring(slideDownAnimation, {
      toValue: 10,  // Final position
      useNativeDriver: true,
      stiffness: 5,  // Lower value = slower animation
      damping: 20,
    }).start();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slideContainer}>
        {item.component}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Arrow animation */}
      <Animated.View
        style={[
          styles.arrowContainer,
          { transform: [{ translateY: slideDownAnimation }] },
        ]}
      >
        <Text style={{ fontSize: 20 }}> slide down</Text>
        <Entypo name="arrow-down" size={100} color="black" />
      </Animated.View>

      <FlatList
        data={slides}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.flatList}
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    flex: 1,
  },
  slideContainer: {
    width: width,
    height: height,
  },
  arrowContainer: {
    position: 'absolute',
    bottom: -90,  // Adjust as needed
    zIndex: 100,
    alignItems: 'center',
  },
});
