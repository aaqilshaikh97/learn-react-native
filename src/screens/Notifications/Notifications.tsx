
import { Text, View,StyleSheet } from 'react-native'
import React from 'react'

const Notifications = () => {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.pageHeading}>Notifications</Text>
    </View>
  )
}

export default Notifications

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