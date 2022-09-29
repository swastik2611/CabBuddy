import {StyleSheet,Text,TextInput, TouchableOpacity, View,Image,Input} from 'react-native';
import React from 'react';

export const Signin = () => {
  return (
    <>
    <View style={styles.contain}>
        <View style={styles.imgctr}>
                <Image source={require('../assets/signin/signlogo.png')} style={styles.loginImage}></Image>
        </View>
        <View style={styles.middle}>
                <View style={styles.heading}>
                <Text style={styles.headtxt}>Login</Text>
                </View>
        </View>
        <View  style={styles.bottom}>
                <View style={{flex:0.70}}>
                    <View style={styles.inpbox}>
                    <Text style={styles.fieldname}>Email</Text>
                    <TextInput style={styles.txtinp}
                    />
                    </View>
                    <View style={styles.inpbox}>
                    <Text style={styles.fieldname}>Password</Text>
                    <TextInput style={styles.txtinp}/>
                    </View>
                    <View style={styles.submit}>
                    <TouchableOpacity style={styles.submitbtn}>
                        <Text style={styles.submittxt}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>   
    </View>
    </>
  );
};
const styles = StyleSheet.create({
    contain: {
    flex: 1,
    backgroundColor: '#E6D0EA',
  },
  imgctr:{
    flex:0.5,
    marginTop:30,
  },
  loginImage:{
    flex:1,
    resizeMode:'cover',
    width:null,
    height:null,
    },
  middle:{
    marginTop:'10%',
    flex:0.1,
  },
  heading:{
    marginTop:'2%',
    alignSelf:"center",
  },
  headtxt:{
    fontSize:40,
    fontWeight:'bold',
  },
  bottom:{
    flex:0.5,
  },
  inpbox:{
   marginHorizontal:'8%',
   marginVertical:'2%',
  },
  fieldname:{
    fontSize:20,
    fontWeight:'600',
    marginVertical:'0.5%',
  },
  txtinp:{
    backgroundColor:'white',
    height:40,
    borderRadius:20,
    paddingVertical:'1%',
    paddingLeft:'5%',
    fontSize:20,
  },
  submit:{
    alignItems:'center',
    justifyContent:"center",
    marginTop:'15%',
  },
  submitbtn:{
    backgroundColor:'black',
    borderRadius:40,
  },
  submittxt:{  
    justifyContent:"center",
    paddingVertical:'3.5%',
    paddingHorizontal:'7%',
    fontSize:23,
    color:'white',
  },
});