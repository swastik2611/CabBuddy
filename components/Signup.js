import React from "react";
import { StyleSheet,TouchableOpacity, Text,TextInput, View,Image } from 'react-native';
import { getLocaleDirection } from "react-native-web/dist/cjs/modules/useLocale";
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
                <View style={{flex:0.70}}>
                    <View style={styles.inpbox}>
                    <Text style={styles.fieldname}>Name</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                      <TextInput style={[styles.txtinp,styles.txtnm]} placeholder='First'/>
                      <TextInput style={[styles.txtinp,styles.txtnm]} placeholder='Last'/>
                    </View>
                    </View>
                    <View style={styles.inpbox}>
                    <Text style={styles.fieldname}>Email</Text>
                    <TextInput style={styles.txtinp}
                    placeholder=" xyz@mail.jiit.ac.in"
                    />
                    </View>
                    <View style={styles.inpbox}>
                    <Text style={styles.fieldname}>Password</Text>
                    <TextInput style={styles.txtinp}/>
                    </View>
                    <View style={styles.inpbox}>
                    <Text style={styles.fieldname}>Confirm Password</Text>
                    <TextInput style={styles.txtinp}/>
                    </View>
                </View>
                <View style={styles.submit}>
                    <TouchableOpacity style={styles.submitbtn}>
                        <Text style={styles.submittxt}>Sign Up</Text>
                    </TouchableOpacity>
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
    flex:0.075,
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
    flex:0.525,
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
  txtnm:{
    flex:0.45,
  },
  submit:{
    alignItems:'center',
    justifyContent:"center",
    flex:0.30,
  },
  submitbtn:{
    backgroundColor:'black',
    borderRadius:40,
  },
  submittxt:{  
    justifyContent:"center",
    paddingVertical:'2.5%',
    paddingHorizontal:'10%',
    fontSize:20,
    color:'white',
  },
});
