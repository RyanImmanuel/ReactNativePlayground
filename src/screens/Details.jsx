import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Details = () => {
  return (
    <View style = {styles.container}>
      <Text>Details</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    },
    smallText : {
        color : "#000000"
    }
})
export default Details