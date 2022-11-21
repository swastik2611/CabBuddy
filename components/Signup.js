import React from "react";
import { StyleSheet,TouchableOpacity,useState, Text,TextInput, View,Image, ScrollView,KeyboardAvoidingView, Alert } from 'react-native';
 export const Signup =()=>{
  const[fname,setFname]=React.useState("");
  const[lname,setLname]=React.useState("");
  const[contact,setContact]=React.useState("+91");
  const[email,setEmail]=React.useState("");
  const[password,setPassword]=React.useState("");
  const[cpassword,setCpassword]=React.useState("");
  const submit=()=>{
    console.log("submit");
    if(fname==""||lname==""||email==""||password==""||cpassword==""){
    return Alert.alert("Complete all fields");
    }
    if(password!=cpassword){
    return Alert.alert("Password does not match");
    }
    console.log(fname,lname,contact,email,password,cpassword);
    fetch("http://10.0.2.2:3000/signup",{
      "method":"POST",
    headers:{
      "Content-Type":"application/json"
      },
      body:JSON.stringify({
        "fname":fname,
        "lname":lname,
        "contact":contact,
        "email":email,
        "password":password,
      })
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      Alert.alert(data.message);
    })
  }
    return(
        <>
        <KeyboardAvoidingView style={styles.contain}>
            <View style={styles.imgctr}>
                <Image source={require('../assets/signup/signup.png')} style={styles.img}></Image>
            </View>
            <View style={styles.middle}>
                <View style={styles.heading}>
                <Text style={styles.headtxt}>Create Your Account</Text>
                </View>
            </View>    
            <ScrollView  style={styles.bottom}>
                <View style={{flex:0.70}}>
                    <View style={styles.inpbox}>
                    <Text style={styles.fieldname}>Name</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                      <TextInput style={[styles.txtinp,styles.txtnm]}
                       placeholder='First' value={fname}
                       onChangeText={(actualData)=>setFname(actualData)}/>
                      
                      <TextInput style={[styles.txtinp,styles.txtnm]}
                       placeholder='Last' value={lname}
                       onChangeText={(actualData)=>setLname(actualData)} />
                    </View>
                    </View>
                    <View style={styles.inpbox}>
                    <Text style={styles.fieldname}>Contact</Text>
                    <TextInput style={styles.txtinp} maxLength={13}
                     value={contact} keyboardType = 'numeric'
                    onChangeText={(actualData)=>setContact(actualData)}
                    />
                    </View>
                    <View style={styles.inpbox}>
                    <Text style={styles.fieldname}>Email</Text>
                    <TextInput style={styles.txtinp}
                    placeholder="xyz@mail.jiit.ac.in" value={email}
                    onChangeText={(actualData)=>setEmail(actualData)}
                    />
                    </View>
                    <View style={styles.inpbox}>
                    <Text style={styles.fieldname}>Password</Text>
                    <TextInput style={styles.txtinp} value={password}
                    secureTextEntry={true}
                    onChangeText={(actualData)=>setPassword(actualData)}/>
                    </View>
                    <View style={styles.inpbox}>
                    <Text style={styles.fieldname}>Confirm Password</Text>
                    <TextInput style={styles.txtinp} value={cpassword}
                    secureTextEntry={true}
                    onChangeText={(actualData)=>setCpassword(actualData)}/>
                    </View>
                </View>
                <View style={styles.submit}>
                    <TouchableOpacity style={styles.submitbtn}
                      onPress={()=>submit()}>
                        <Text style={styles.submittxt}>Sign Up</Text>
                        
                    </TouchableOpacity>
                </View>
                
            </ScrollView>
        </KeyboardAvoidingView>
        </>
        
    )
 };
 const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: '#E6D0EA',
  },
  imgctr:{
    flex:0.45,
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
    flex:0.45,
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
