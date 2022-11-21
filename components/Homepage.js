import React from 'react';
import { render } from 'react-dom';
import { StyleSheet,TouchableOpacity, Text, View,Image } from 'react-native';

export const Homepage =({navigation})=>  { 
  onSignupPress=()=>{
    navigation.navigate("Signup")
  };
  onSigninPress=()=>{
    navigation.navigate("Signin")
  };
  return ( 
    <>
    <View style={styles.container}>
        <View style={styles.top}>
        <Image style={styles.img} source={require('../assets/homepage/cab.jpeg')}/>
      </View>
      <View style={styles.middle}>
        <Text style={styles.txt}>Welcome To</Text>
        <Text style={styles.txt}>Cab Buddies</Text>
        <Text style={styles.tag}>Find your Travel Buddies</Text>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.btns} onPress={onSigninPress}>
        {/* onPress={()=>onSigninPress()} */}
        {/* > */}
          <Text style={styles.btn}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSignupPress} style={styles.btns}>
         {/* onPress={()=>onSignupPress()} */}
        {/* > */}
          <Text style={styles.btn}>Sign Up</Text>
        </TouchableOpacity>
      </View>

    </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00323D',
  },
  top:{
    flex:0.45,
    marginTop:'7%',    
  },
  img: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  middle:{
    marginTop:'5%',
    flex:0.25,
  },
  txt:{
    paddingVertical:'1.5%',
    color:'white',
    fontSize:32,
    fontWeight:'bold',
    textAlign:'center',
  },
  tag:{
    paddingTop:'1.5%',
    color:'white',
    fontSize:16,
    fontWeight:"10",
    textAlign:'center',
  },
  bottom:{
    flex:0.35,
    paddingTop:'1%',
  },
  btn:{
    backgroundColor:'white',
    marginHorizontal:'25%',
    padding:'2.5%',
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
    paddingVertical:'2.5%',
    marginBottom:'3.5%',
  }
});