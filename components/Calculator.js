//import { StatusBar } from "expo-status-bar";

import {Alert,StyleSheet,Text,useState,TextInput,TouchableOpacity,View,} from "react-native";
import React,{Component} from "react";


export const Calculator=()=> {
  const[totalfare,setTotalFare]=React.useState(0);
  const [riders,setRiders]=React.useState(0);
  const [fare,setFare]=React.useState(0);
  const calc=()=>{
    if(riders==0||totalfare==0){
      Alert.alert("Enter details");
    }
    else{
      setFare((totalfare/riders).toFixed(2));
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Fare Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="TOTAL FARE"
        keyboardType="numeric"
        onChangeText={(actualData)=>setTotalFare(actualData)}
      />
      <TextInput
        style={styles.input}
        placeholder="RIDERS"
        keyboardType="numeric"
        onChangeText={(actualData)=>setRiders(actualData)
      }
      />
      <TouchableOpacity style={styles.input} onPress={calc}>
        <Text style={{textAlign:'center',fontSize:18}}>Calculate</Text>
        </TouchableOpacity>
      <Text style={styles.final}>Total Fare: {totalfare}</Text>
      <Text style={styles.final}>Your Fare: {fare}</Text>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6D0EA',
    alignItems: "center",
    justifyContent: "center",
  },

  hist: {
    marginTop: 10,
    marginLeft: 130,
    marginRight: 130,
    top: 100,
    width: 130,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: "#000",
    borderRadius: 10,
    borderColor: "#fff",
    alignItems: "center",
    right: 130,
  },

  heading: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 40,
    position: "relative",
    top: -40,
  },

  input:
  {
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius:50,
    height:40,
    margin:10,
    borderWidth:2,
    padding:5,    
    minWidth:'45%',
    minHeight:50,
  },

  final:
  {
    textAlign:"center",
    fontSize:20,
    position:"relative",
    top:10,
    fontWeight:"bold",
  },

});
