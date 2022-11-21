import React, { useEffect }  from "react";
import { Button, TextInput, View, Text, ActivityIndicator,StyleSheet } from "react-native";
//  import {AsyncStorage} from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const LoadingScreen = () => {
    useEffect(async() => {
        const token = await AsyncStorage.getItem('token');
        if(token){
            
        }
        else{
            setLogged(false)
        }

  return (
    <>
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="#ccc" />
      <Text>Loading...</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});