import React from "react";
import { StyleSheet,TouchableOpacity, Text,TextInput, View,Image } from 'react-native';
 export const Signup =()=>{
    return(
        <>
        <View style={styles.contain}>
            <View style={styles.imgctr}>
                <Image source={require('../assets/signup/signup.png')} style={styles.img}></Image>
            </View>
            <View style={styles.middle}>
                <View style={styles.heading}>
                <Text style={styles.headtxt}>Create Your Account</Text>
                </View>
            </View>    
            <View  style={styles.bottom}>
                <View style={styles.inpbox}>
                    <Text style={styles.fieldname}>Name</Text>
                    <TextInput style={styles.txtinp}/>
                </View>
                <View style={styles.inpbox}>
                    <Text style={styles.fieldname}>Email</Text>
                    <TextInput style={styles.txtinp}/>
                </View>
                <View style={styles.inpbox}>
                    <Text style={styles.fieldname}>Password</Text>
                    <TextInput style={styles.txtinp}/>
                </View>
                <View style={styles.inpbox}>
                    <Text style={styles.fieldname}>Confirm Password</Text>
                    <TextInput style={styles.txtinp}/>
                </View>
                <View>
                <View style={styles.submit}>
                    <TouchableOpacity style={styles.submitbtn}>
                        <Text style={styles.submittxt}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        </View>
        </>
    )
 };
 const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: '#E6D0EA',
  },
  imgctr:{
    flex:0.4,
    marginTop:30,
  },
  middle:{
    flex:0.1,
  },
  img:{
    flex:1,
    resizeMode:'cover',
    width:null,
    height:null,
  },
  heading:{
    marginTop:'2%',
    alignSelf:"center",
  },
  headtxt:{
    fontSize:32,
  },
  bottom:{
    flex:0.5,
  },
  inpbox:{
   marginHorizontal:'8%',
   marginVertical:'1%',
  },
  fieldname:{
    fontSize:20,
    marginVertical:'1%',
  },
  txtinp:{
    backgroundColor:'white',
    borderRadius:10,
    padding:'1%',
  },
  submit:{
    justifyContent:"center",
    marginTop:'3%',
  },
  submitbtn:{
    backgroundColor:'black',
    marginHorizontal:'25%',
    marginTop:'5%',
    borderRadius:40,
  },
  submittxt:{
    textAlign:"center",
    justifyContent:"center",
    paddingVertical:'8%',
    paddingHorizontal:'10%',
    fontSize:20,
    color:'white',
  },
});
