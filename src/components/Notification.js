import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Notification = () => {
  return (
    <LinearGradient colors={['#2c67f2', '#62cff4']} style={styles.container}>
      <View>
        <Text style={styles.text}>Notification</Text>
      </View>
    </LinearGradient>
  )
}

export default Notification

const styles = StyleSheet.create({
  container:{
    flex : 1,
    alignItems:'center',
  },
  text:{
    fontSize:30,
    color:'violet',
    fontWeight:'bold'
  },
})