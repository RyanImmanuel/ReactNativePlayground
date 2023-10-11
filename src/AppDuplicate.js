import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableNativeFeedback, Button, Alert} from 'react-native';
//Navigation
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
//screens
import Home from './screens/Home';
import Details from './screens/Details';

const Stack = createNativeStackNavigator()

export default function App() {
  console.log(require("./assets/favicon.png"));
  const handlePress = () => console.log("Text pressed");

  return (
    <View style={styles.container}>
      <Text onPress = {handlePress}>React Native</Text>

      <TouchableNativeFeedback onLongPress={() => console.log("long press")}>
      <Image style = {styles.image} 
      borderRadius={10}
      fadeDuration={1000}
      source={{
        width : 100,
        height : 150,
        uri : "https://picsum.photos/200/300",
        }}/>
      </TouchableNativeFeedback>
      
      <TouchableOpacity>
      <Image style = {styles.image} 
      borderRadius={10}
      fadeDuration={1000}
      source={{
        width : 100,
        height : 150,
        uri : "https://picsum.photos/200/300",
        }}/>
      </TouchableOpacity>

      <Button 
      title='Click' 
      onPress={()=> Alert.alert("Title", "Statements.....",
      [{text : "Yes", onPress: ()=>console.log("Yes")},
      {text : "No", onPress: ()=>console.log("No")}
      ]
      )}/>

      {/* for ios */}
      {/* <Button
      title='Submit'
      onPress={()=>Alert.prompt("Enter", "Enter your USN", text => console.log(text)) }
      /> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightpink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    paddingTop : "100px",
    alignItems : 'flex-end'
  },
});
