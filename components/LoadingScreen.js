import React, { useEffect, useState }  from "react";
import { Button, TextInput, View, Text, ActivityIndicator,StyleSheet, Alert } from "react-native";
//  import {AsyncStorage} from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const LoadingScreen = (props) => {
    useEffect(async() => {
        const token = await AsyncStorage.getItem('token');
        if(token){
            props.navigation.replace("Request")
        }
        else{
            Alert.alert("Invalid Credentials")
            props.navigation.replace("Signin")
        }
        }, []);

  return (
    <>
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="#ccc" />
      <Text>Loading...</Text>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});