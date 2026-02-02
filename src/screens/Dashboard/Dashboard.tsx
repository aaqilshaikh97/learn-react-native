
import { Text, View,StyleSheet } from 'react-native'
import React from 'react'

const Dashboard = () => {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.pageHeading}>Dashboard</Text>
    </View>
  )
}

export default Dashboard

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