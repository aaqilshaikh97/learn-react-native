import { Text, View,StyleSheet } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.pageHeading}>About</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  pageContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  pageHeading:{
    fontSize:30,
    fontWeight:"600"
  }
})