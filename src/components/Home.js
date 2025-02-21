import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Fonts } from '../styles/Fonts'

// Access JSON file using require
const weatherData = require('../assets/Constants/weather_data.json');

export default function Home() {
  return (
    <LinearGradient colors={['#075B94', '#080745']} style={styles.container}>
      <View>
        <Text style={styles.text}> Home </Text>

        <Text style={styles.city}>Location : {weatherData.location.country}</Text>
        <Text style={styles.city}>Location : {weatherData.location.city}</Text>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container:{
    flex : 1,
    alignItems:'center',
  },
  text:{
    fontSize:30,
    color:'violet',
    fontFamily : Fonts.GorditasBold
  },
  city:{
    fontFamily:Fonts.GorditasRegular,
    color:'white',
    fontSize:15,
  },
})