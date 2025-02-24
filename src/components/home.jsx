import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Import SVG Icons
import GpsIcon from '../assets/Images/location-gps.svg';
import HumidityIcon from '../assets/Images/humidity.svg';
import WindIcon from '../assets/Images/wind.svg';
import TemperatureIcon from '../assets/Images/thermostat.svg';

// Import Weather Images
import Thunder from '../assets/Images/thunder.png';
import Raining from '../assets/Images/rain.png';
import CloudRain from '../assets/Images/rainy-cloud.png';
import Sunny from '../assets/Images/sunny.png';

const { width, height } = Dimensions.get('window');

const forecastData = [
  { time: '14.00', temp: '32°', icon: Sunny, highlighted: true },
  { time: '15.00', temp: '30°', icon: Raining, highlighted: false },
  { time: '16.00', temp: '29°', icon: Thunder, highlighted: false },
  { time: '17.00', temp: '32°', icon: Sunny, highlighted: false },
  { time: '18.00', temp: '30°', icon: Raining, highlighted: false },
  { time: '19.00', temp: '29°', icon: Thunder, highlighted: false },
];

const extendedForecastData = [
  { day: 'Wednesday', date: '21 June', temp: '29°', icon: Thunder },
  { day: 'Thursday', date: '22 June', temp: '21°', icon: CloudRain },
  { day: 'Friday', date: '23 June', temp: '24°', icon: Raining },
  { day: 'Saturday', date: '24 June', temp: '30°', icon: Sunny },
  { day: 'Sunday', date: '25 June', temp: '22°', icon: CloudRain },
];

const Home = () => {
  const [showFullForecast, setShowFullForecast] = useState(false);

  return (
    <LinearGradient colors={['#075B94', '#080745']} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Location and Time */}
        <View style={styles.header}>
          <Text style={styles.location}>Kochi, Kerala</Text>
          <GpsIcon width={22} height={22} style={styles.gps} />
        </View>
        <Text style={styles.time}>June 20, 3:01 AM</Text>

        {/* Weather Image */}
        <Image source={CloudRain} style={styles.weatherImage} />

        {/* Weather Info Section */}
        <View style={styles.weatherInfo}>
          <View style={styles.weatherItem}>
            <View style={styles.WeatherIcon}>
              <TemperatureIcon width={24} height={24} />
              <Text style={styles.weatherText}>Temp</Text>
            </View>
            <Text style={styles.weatherValue}>28°</Text>
          </View>
          <View style={styles.weatherItem}>
            <View style={styles.WeatherIcon}>
              <WindIcon width={24} height={24} />
              <Text style={styles.weatherText}>Wind</Text>
            </View>
            <Text style={styles.weatherValue}>7.90 km/h</Text>
          </View>
          <View style={styles.weatherItem}>
            <View style={styles.WeatherIcon}>
              <HumidityIcon width={24} height={24} />
              <Text style={styles.weatherText}>Humidity</Text>
            </View>
            <Text style={styles.weatherValue}>84%</Text>
          </View>
        </View>

        {/* Forecast Section */}
        <View style={styles.forecastContainer}>
          <Text style={styles.forecastTitle}>Today</Text>
          <TouchableOpacity onPress={() => setShowFullForecast(!showFullForecast)}>
            <Text style={styles.viewAll}>{showFullForecast ? 'Hide' : 'View All'}</Text>
          </TouchableOpacity>
        </View>

        {/* Forecast Cards - Horizontal Scroll */}
        <FlatList
          data={forecastData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.forecastList}
          renderItem={({ item }) => (
            <View
              style={[
                styles.forecastCard,
                item.highlighted && styles.highlightedCard,
              ]}
            >
              <View style={styles.forecastRow}>
                <Image source={item.icon} style={styles.forecastIcon} />
                <View style={styles.forecastDetails}>
                  <Text style={styles.forecastTime}>{item.time}</Text>
                  <Text style={styles.forecastTemp}>{item.temp}</Text>
                </View>
              </View>
            </View>
          )}
        />

        {/* Extended Forecast (View All) */}
        {showFullForecast && (
          <View style={styles.expandedForecast}>
            <FlatList
              data={extendedForecastData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.extendedForecastCard}>
                  <Text style={styles.forecastDay}>{item.day}</Text>
                  <Text style={styles.forecastDate}>{item.date}</Text>
                  <Image source={item.icon} style={styles.forecastIcon} />
                  <Text style={styles.forecastTemp}>{item.temp}</Text>
                </View>
              )}
            />
          </View>
        )}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingVertical: height * 0.05,
    paddingHorizontal: width * 0.05,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.01,
  },
  location: {
    color: 'white',
    fontSize: width * 0.095,
    marginRight: 5,
    fontFamily: 'Gorditas-Bold',
  },
  gps: {
    marginLeft: 5,
  },
  time: {
    color: 'white',
    fontSize: width * 0.05,
    textAlign: 'center',
    marginBottom: height * 0.03,
  },
  weatherImage: {
    width: width * 0.65,
    height: width * 0.65,
    alignSelf: 'center',
    marginBottom: height * 0.03,
  },
  weatherInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: height * 0.03,
    marginTop: height * 0.03,
    width: '100%',
    height: height * 0.15,
  },
  forecastContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.02,
  },
  forecastTitle: {
    color: 'white',
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
  viewAll: {
    color: 'lightblue',
    fontSize: width * 0.04,
  },
  forecastList: {
    paddingLeft: 10,
  },
  forecastCard: {
    backgroundColor: '#0A4DA2',
    borderRadius: 15,
    padding: height * 0.015,
    width: width * 0.35,
    marginRight: width * 0.03,
  },
  highlightedCard: {
    backgroundColor: '#1A73E8',
  },
  expandedForecast: {
    marginTop: 10,
  },
  extendedForecastCard: {
    backgroundColor: '#0A4DA2',
    borderRadius: 15,
    padding: height * 0.02,
    marginBottom: height * 0.02,
    alignItems: 'center',
  },
  forecastTemp: {
    color: 'white',
    fontSize: width * 0.06,
    fontWeight: 'bold',
  },
});

export default Home;
