
import { Text, View,StyleSheet } from 'react-native'
import React from 'react'

const Messages = () => {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.pageHeading}>Messages</Text>
    </View>
  )
}

export default Messages

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