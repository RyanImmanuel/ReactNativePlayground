import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <Text>Home</Text>
      <Button
      title='Click'
      onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : "lightblue"
    },
    smallText : {
        color : "#000000"
    }
})