import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,TouchableOpacity, Text, View,Image } from 'react-native';
import {Homepage} from './components/Homepage';

import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Book } from './components/Booking';

export default function App() { 
  return (
    <View style={styles.container}>
      <StatusBar style="auto" /> 
      <Book/>
      {/* <Homepage/> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00323D',
  },
});
