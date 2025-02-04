import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Fonts } from '../styles/Fonts'

export default function Home() {
  return (
    <LinearGradient colors={['#075B94', '#080745']} style={styles.container}>
      <View>
        <Text style={styles.text}> Home </Text>
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
  }
})