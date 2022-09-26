import React from 'react';
import { render } from 'react-dom';
import { StyleSheet,TouchableOpacity, Text, View,Image } from 'react-native';

export const Homepage =()=>  { 
  return (
    <>
      <View style={styles.top}>
        <Image style={styles.img} source={require('../assets/homepage/cab.jpeg')}/>
      </View>
      <View style={styles.middle}>
        <Text style={styles.txt}>Welcome To</Text>
        <Text style={styles.txt}>Cab Buddies</Text>
        <Text style={styles.tag}>Find your Travel Buddies</Text>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.btns}>
          <Text style={styles.btn}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.btn}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  top:{
    flex:0.45,
    marginTop:30,    
  },
  img: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  middle:{
    marginTop:10,
    flex:0.25,
  },
  txt:{
    paddingVertical:5,
    color:'white',
    fontSize:32,
    fontWeight:'bold',
    textAlign:'center',
  },
  tag:{
    paddingTop:10,
    color:'white',
    fontSize:16,
    fontWeight:"10",
    textAlign:'center',
  },
  bottom:{
    flex:0.35,
    paddingTop:20,
  },
  btn:{
    backgroundColor:'white',
    marginHorizontal:120,
    padding:10,
    fontSize:32,
    fontWeight:'bold',
    textAlign:'center',
    borderRadius:15,
    borderWidth:2,
    borderColor:'black',
  },
  btns:{
    justifyContent:'center',
    textAlign:'center',
    paddingVertical:10,
    marginBottom:10,
  }
});