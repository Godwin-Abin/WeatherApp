import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { Fonts } from '../styles/Fonts';


const notifications = [
  { title: 'A Storm is approaching!', icon: '🌧️' },
  { title: 'There will be snow tomorrow', icon: '❄️' },
  { title: 'It’s a sunny day', icon: '🌤️' },
];

const NotificationCard = ({ title, icon }) => (
  <View style={styles.card}>
    <View style={styles.header}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
    <Text style={styles.description}>
      A high frequency storm is likely to approach your city with a magnitude of
      6.0. It is likely to deal damage to weak structures. Please stay safe
      indoor or under shelter.
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
  )
}

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 40,
    // fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: Fonts.GorditasBold,
  },
  card: {
    backgroundColor: '#075B90',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    height: 230,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    fontSize: 28,
    marginRight: 10,
  },
  title: {
    fontSize: 23,
    // fontWeight: 'bold',
    color: 'white',
  },
  description: {
    marginTop:10,
    fontSize: 20,
    color: 'white',
  },
});
