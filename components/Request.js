import React, { useEffect } from 'react';
import { StyleSheet,TouchableOpacity, Text,ScrollView, View,TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Map } from './Map';
import { NavigationContainer } from "@react-navigation/native";
import { Tomtom } from './Tomtom';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { services } from '@tomtom-international/web-sdk-services';
//import SearchBox from '@tomtom-international/web-sdk-plugin-searchbox';
import { Feather } from "@expo/vector-icons";
import searchOptions from './searchOptions';
import AutoCompleteInput from "react-native-tomtom-autocomplete";

export const Request=({navigation})=> {
  onInvitePress=()=>{
    navigation.navigate("Seat")
  };
  onRequestPress=()=>{
    navigation.navigate("Demand")
  };
  onViewPress=()=>{
    console.log("View Pressed")
    fetch("http://10.0.2.2:3000/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       email:email,
      }),
    })
      .then((res) => res.text())
      .then((data) => {
        try {
          console.log(data.message);
          if (data.message === "User already exists") {
            Alert.alert("User already exists");
          } else {
            console.log("Request posted");
            navigation.navigate("Profiles");
          }
        } catch (e) {
          console.log("Error", e);
          Alert.alert("");
        }
      })
      .catch(function (error) {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
        Alert.alert("User already exists2");
        // setFrom("")
        // setTo("")
        // setContact("")
        // setVacant("")
      });
  };
const [email,setEmail]=React.useState('');
  useEffect(async() => {
    const token = await AsyncStorage.getItem('token');
    fetch("http://10.0.2.2:3000/",{
      headers:new Headers({
        Authorization:"Bearer "+token
      })
    }).then(res=>res.json())
    .then(data=>{console.log(data)
      setEmail(data.email)
})
  }, [])
  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={styles.top}>
          <View style={styles.imgctr}>
            <Tomtom />
            {/* <Map/> */}
            <View style={{ marginTop: 20, marginLeft: 5, zIndex: 1 }}>
              {/* <Ionicons name="md-reorder-three-sharp" size={50} color="#00323D" /> */}
            </View>
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={{ marginVertical: 20 }}>
            {/* <View style={styles.align}> */}
            {/* <Text style={{flex:0.1}}>
            <Octicons name="dot-fill" size={22} color="green" />
          </Text> */}
            {/* <Text style={{flex:1,fontSize:16}} placeholder="Source"> */}
            {/* <AutoCompleteInput style={styles.searchContainer}
              inputProps={{
                  text: 'Search',
                  placeholder: "🔴  Source",
                  fontSize: 18,
                  // placeholderTextColor: "#00323D",
                  style: styles.searchContainer,
              }}
              onPress={(item) => console.log('item', item)}
              inputContainerStyle={{
                  // padding: 10,
                  // margin: 5,
                  // borderWidth: 2,
                  // borderColor: "grey",
                  // width: 150
                  // placeholder: "Source",
              }}
              listItemsContainerStyle={{
                  // padding: 10,
                  // marginRight: 40
                  // marginHorizontal: 10,
                  // borderWidth: 2,
                  // borderColor: "grey",
                  style: styles.searchResultContainer,
              }}
              // bottomDivider
              tomtomOptions={{ key: "vHU6pZapwSCLHNgswp5XdDAJpdUkr0MG" }}
            /> */}
            {/* </Text> */}
            {/* <Text style={styles.location}>
          <AntDesign name="downcircleo" size={24} color="black" />
          </Text>
        </View> */}
            {/* <View style={styles.align}>
          <Text style={{flex:0.1}}>
            <Octicons name="dot-fill" size={22} color="red" />
          </Text>
          <TextInput style={{flex:1,fontSize:16}} placeholder="Destination"/>
          <Text style={styles.location}>
          <AntDesign name="downcircleo" size={24} color="black" />
          </Text>
        </View> */}
          </View>
          <View>
            {/* <View >
          <Text style={styles.email}> {email}</Text>    

        </View> */}
            <View style={styles.btnctr}>
              <TouchableOpacity style={styles.btn} onPress={onRequestPress}>
                <Text style={styles.btntxt}>Request</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={onInvitePress}>
                <Text style={styles.btntxt}>Invite</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.ibtn}>
              <TouchableOpacity onPress={onViewPress}>
            <Feather name="info" size={40} color="white" />
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bottom:{
   flex:0.2,
   marginTop:-20,
   backgroundColor:'#00323D',
   borderRadiusTopLeft:80,
   justifyContent: "flex-start",
  },
  align:{
    flexDirection:'row',
    backgroundColor:'white',
    marginHorizontal:50,
    marginVertical:10,
    marginBottom:10,
    padding:12,
    borderRadius:24,
    fontSize:25,
   // width:'100%',
    borderWidth:1,
    bordercolor:'black',
  },
  top:{
  flex:0.85,
  },
  imgctr:{
    flex:1,
  },
  img: {
    flex:1,
    width: null, 
    height:null ,
    resizeMode: 'cover',
  },
  btnctr:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:20,
    marginTop:0,
  },
  email:{
    fontSize:20,
    color:'white',
    textAlign:'center',
    marginBottom:5,
  },
  btn:{
    paddingVertical:"2.5%",
    backgroundColor:'white',
    borderColor:'black',
    borderWidth:3,
    borderRadius:50,
    width:'45%',
  },
  btntxt:{
     textAlign:'center',
     fontWeight:'bold',
     fontSize:24,
  },
  ibtn:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:15,
  },
  searchContainer:{
    // flex:1,
    // width: '100%',
    color:"black",
    backgroundColor:'white',
    marginHorizontal:50,
    marginVertical:10,
    marginBottom:10,
    padding:10,
    borderRadius:24,
    // fontSize:25,
   // width:'100%',
    borderWidth:1,
    bordercolor:'black',
  },
  searchResultContainer:{
    // flex:1,
    color:"black",
    backgroundColor:'white',
    margin: 0
  }

});
