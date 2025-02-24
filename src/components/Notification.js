import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Fonts } from '../styles/Fonts';

import Snow from '../assets/Images/snow.png';
import Raining from '../assets/Images/rain.png';
import Sunny from '../assets/Images/sunny.png';

const notifications = [
  { title: 'A Storm is approaching!', icon: Raining },
  { title: 'There will be snow tomorrow', icon: Snow },
  { title: 'It’s a sunny day', icon: Sunny },
];

const NotificationCard = ({ title, icon }) => (
  <View style={styles.card}>
    <View style={styles.header}>
      <Image source={icon} style={styles.weatherIcon} />
      <Text style={styles.title}>{title}</Text>
    </View>
    <Text style={styles.description}>
      A high-frequency storm is likely to approach your city with a magnitude of
      6.0. It is likely to deal damage to weak structures. Please stay safe
      indoors or under shelter.
    </Text>
  </View>
);

const Notification = () => {
  return (
    <LinearGradient colors={['#075B94', '#080745']} style={styles.container}>
      <Text style={styles.headerText}>Notification</Text>
      <FlatList
        data={notifications}
        renderItem={({ item }) => <NotificationCard {...item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </LinearGradient>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: Fonts.GorditasBold,
  },
  card: {
    backgroundColor: '#0A4DA2',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  weatherIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    marginTop: 5,
    fontSize: 16,
    color: 'white',
    lineHeight: 24, // Added better line spacing
  },
});
