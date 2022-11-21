import {StyleSheet,Text,TextInput, TouchableOpacity, View,Image,Input,Alert,KeyboardAvoidingView} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Signin = ({navigation}) => {
  const[email,setEmail]=React.useState('');
  const[password,setPassword]=React.useState('');
  const submit= async(props)=>{
    console.log("submit");
    console.log(email,password);
    if(email==""||password==""){
      return Alert.alert("Complete all fields");
    }
    fetch("http://10.0.2.2:3000/signin",{
      "method":"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        "email":email,
        "password":password
      })
    })
    .then(res=>res.json())
    .then(async data=>{
      try{
        await AsyncStorage.setItem('token',data.token);
        console.log(data.token);
        console.log(data.message);
        if(data.message==="Invalid Credentials"){
          Alert.alert("Invalid Credentials");
        }
        else{
          Alert.alert("Login Successful");
          navigation.navigate("Request")
        }
      }
      catch(e){
        console.log("Error",e);
         Alert.alert("Invalid Credentials");
      }
  }
    )
    .catch(function(error) {
    // console.log('There has been a problem with your fetch operation: ' + error.message); 
    });
  }
  return (
    <>
    <KeyboardAvoidingView style={styles.contain}>
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
                    <TextInput style={styles.txtinp} value={email}
                    onChangeText={(actualData)=>setEmail(actualData)}
                    />
                    </View>
                    <View style={styles.inpbox}>
                    <Text style={styles.fieldname}>Password</Text>
                    <TextInput style={styles.txtinp} value={password}
                    secureTextEntry={true}
                    onChangeText={(actualData)=>setPassword(actualData)}/>
                    </View>
                    <View style={styles.submit}>
                    <TouchableOpacity style={styles.submitbtn} onPress={()=>submit()}>
                        <Text style={styles.submittxt}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>   
    </KeyboardAvoidingView>
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