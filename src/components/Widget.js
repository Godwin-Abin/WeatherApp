import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Fonts } from '../styles/Fonts';

import Thunder from '../assets/Images/thunder.png';
import Snow from '../assets/Images/snow.png';
import Raining from '../assets/Images/rain.png';
import Sunny from '../assets/Images/sunny.png';

const weatherData = [
  { location: 'Kochi, Kerala', temp: '29°', condition: 'Thunder storm', icon: Thunder, colors: ['#141E30', '#243B55'] },
  { location: 'Wayanad, Kerala', temp: '02°', condition: 'Snow', icon: Snow, colors: ['#0F2027', '#203A43'] },
  { location: 'Kozhikode, Kerala', temp: '21°', condition: 'Raining', icon: Raining, colors: ['#ffffff', '#e0e0e0'], darkText: true },
  { location: 'Kollam, Kerala', temp: '30°', condition: 'Sunny', icon: Sunny, colors: ['#56CCF2', '#2F80ED'] },
];

const WeatherCard = ({ location, temp, condition, icon, colors, darkText }) => (
  <LinearGradient colors={colors} style={[styles.card, darkText && styles.lightCard]}>
    <View style={styles.weatherInfo}>
      <Image source={icon} style={styles.weatherIcon} />
      <View>
        <Text style={[styles.location, darkText && styles.darkText]}>{location}</Text>
        <Text style={[styles.condition, darkText && styles.darkText]}>{condition}</Text>
      </View>
    </View>
    <Text style={[styles.temperature, darkText && styles.darkText]}>{temp}</Text>
  </LinearGradient>
);

export default function Widget() {
  return (
    <LinearGradient colors={['#075B94', '#080745']} style={styles.container}>
      <Text style={styles.title}>Widgets</Text>
      {weatherData.map((weather, index) => (
        <WeatherCard key={index} {...weather} />
      ))}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  title: {
    color: 'white',
    fontSize: 30,
    // fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily:Fonts.GorditasBold,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    height:110,
  },
  lightCard: {
    borderWidth: 1,
    borderColor: '#d0d0d0',
  },
  weatherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherIcon: {
    width: 62,
    height: 62,
    marginRight: 10,
  },
  location: {
    color: 'white',
    fontSize: 21,
    // fontWeight: 'bold',
    marginLeft:20,
  },
  condition: {
    color: 'white',
    fontSize: 19,
    marginLeft:20,
  },
  temperature: {
    color: 'white',
    fontSize: 45,
  },
  darkText: {
    color: 'black',
  },
});
