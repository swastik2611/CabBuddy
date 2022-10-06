import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,TouchableOpacity, Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Homepage} from './components/Homepage';
import { Request } from './components/Request';
import { Signup } from './components/Signup';
import { Signin } from './components/Signin';
import { Map } from './components/Map';

export default function App() { 
  const Stack = createNativeStackNavigator();
  return (
    // <NavigationContainer style={styles.container}>
    //   <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Homepage'>
    //     <Stack.Screen name="Homepage" component={Homepage}/>
    //     <Stack.Screen name="Signup" component={Signup}/>
    //     <Stack.Screen name="Signin" component={Signin}/>
    //     <Stack.Screen name="Request" component={Request}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View style={styles.container}>
      <StatusBar style="auto" /> 
      {/* <Homepage/> */}
      {/* <Map/> */}
      {/* <Signin/> */}
      {/* <Signup/>  */}
      <Request/>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
  flex:1,
  }
});