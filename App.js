import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet,TouchableOpacity, Text, View,Image,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Homepage} from './components/Homepage';
import { Request } from './components/Request';
import { Signup } from './components/Signup';
import { Signin } from './components/Signin';
import { Map } from './components/Map';
import { Tomtom } from './components/Tomtom';
import { Calculator } from './components/Calculator';
import { LoadingScreen } from './components/LoadingScreen';
import {Seat} from './components/Seat';
import { Availability } from './components/Availability';
// import {User} from './models/User';
 
export default function App() { 
  const[islogged,setLogged]=React.useState(false);
  useEffect(async() => {
    const token = await AsyncStorage.getItem('token');
    if(token){
        setLogged(true)
    }
    else{
        setLogged(false)
    }
  }, []);

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Homepage'>
        <Stack.Screen name="Homepage" component={Homepage}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Signin" component={Signin}/>
        <Stack.Screen name="Request" component={Request}/>
        <Stack.Screen name="LoadingScreen" component={LoadingScreen}/>
        <Stack.Screen name='Seat' component={Seat}/>
        <Stack.Screen name='Availability' component={Availability}/>
      </Stack.Navigator>
      </NavigationContainer>
    //  <View style={styles.container}>
    //    {/* <StatusBar style="auto" />  */}
    //    {/* <Homepage/>  */}
    //    {/* <Map/> */}
    //    <Signin/>
    //    {/* <Signup/>  */}
    //    {/* <LoadingScreen/> */}
    //    {/* <Request/>  */}
    //    {/* <Seat/> */}
    //    {/* <Availability/> */}
    //    {/* <Calculator/> */}
    //    {/* <Tomtom/>  */}
    //   </View>  
  );
}
const styles = StyleSheet.create({
  container:{
  flex:1,
  },
});
