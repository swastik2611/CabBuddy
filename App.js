import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,TouchableOpacity, Text, View,Image } from 'react-native';
import {Homepage} from './components/Homepage';
import { Book } from './components/Request';
import { Signup } from './components/Signup';

export default function App() { 
  return (
    <View style={styles.container}>
      <StatusBar style="auto" /> 
      <Homepage/>
      {/* <Signup/> */}
      {/* <Book/> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00323D',
  },
});
