import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet,TouchableOpacity, Text, View,Image,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
import { Demand } from './components/Demand';
import { Profiles } from './components/Profiles';
 
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
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Homepage">
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Request" component={Request} />
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="Seat" component={Seat} />
        <Stack.Screen name="Availability" component={Availability} />
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen name="Demand" component={Demand} />
        <Stack.Screen name="Profiles" component={Profiles} />
      </Stack.Navigator>
     </NavigationContainer>
    //  <View style={styles.container}>
    //    {/* <StatusBar style="auto" />  */}
    //    {/* <Homepage/>  */}
    //    {/* <Map/> */}
    //    {/* <Signin/> */}
    //    {/* <Profiles/> */}
    //    {/* <Signup/>  */}
    //    {/* <LoadingScreen/> */}
    //    <Request/> 
    //    {/* <Seat/> */}
    //    {/* <Availability/> */}
    //    {/* <Demand/> */}
    //    {/* <Calculator/> */}
    //    {/* <Tomtom/>  */}
    //   </View>
  );
}
const styles = StyleSheet.create({
  container:{
  flex:1,
  backfaceVisibility:'#E6D0EA',
  },
});
