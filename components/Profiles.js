import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import axios from "axios";
import React, { useEffect, useState } from "react";
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import { FontDisplay } from 'expo-font';
export const Profiles= ()=> {
  const [data,setData]=React.useState([]);
  const [fname, setFname] = React.useState();
   useEffect(async() => {
     console.log("in  prof function1");
     async function fetchData() {
       console.log("in function2");
       try {
         // const res = await axios.get("https://jsonplaceholder.typicode.com/users");
         const res = await axios.get("http:10.0.2.2:3000/getprofile");
         console.log("in function3");
         console.log("data is ",res.data);
         console.log("fname is",res.data[0].fname);
         setData(res.data);
         setFname(res.data.fname);
         console.log(res.data.fname);
       } catch (error) {
         console.log(error);
       }
       // const request = await axios.get("http://localhost:3000/availability");
       // console.log("data is ",request.data);
     }
     fetchData();
   }, []);     
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ alignSelf: "center", marginTop: 60 }}>
            <View style={styles.profileimg}>
              <Image
                source={require("../assets/profile.jpg")}
                style={styles.image}
                resizeMode="center"
              ></Image>
            </View>
            <View style={styles.dm}>
              <MaterialIcons
                name="chat"
                size={18}
                color="#DFD8C8"
              ></MaterialIcons>
            </View>
            <View style={styles.active}></View>
          </View>
          <View style={styles.info}>
            <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
              Profile
            </Text>
          </View>
          <View style={styles.status}>
            <Text style={[styles.text, { fontSize: 22 }]}>
              First Name:
            </Text>
            <Text style={[styles.text, { fontSize: 22 }]}>
              Last Name: 
            </Text>
            <Text style={[styles.text, { fontSize: 22 }]}>
              Email ID: 
            </Text>
            <Text style={[styles.text, { fontSize: 22 }]}>
              Phone Number: 
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6D0EA",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    // fontFamily: "HelveticaNeue",
    marginTop:20,
    color: "#52575D",
  },

  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },

  titlebar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
  profileimg: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  dm: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },

  info: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 40,
  },

  status: {
    flexDirection: "column",
    alignSelf: "flex-start",
    marginTop: 32,
  },
});
