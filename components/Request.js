import React from 'react';
import { StyleSheet,TouchableOpacity, Text, View,TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Map } from './Map';
import { Tomtom } from './Tomtom';

export const Request=()=> { 
  return (
    <>
      <View style={{flex:1}}>
      <View style={styles.top}>
      <View style={styles.imgctr}>
        <Tomtom/>
        <View style={{marginTop:20,marginLeft:5,zIndex:1}}>
          <Ionicons name="md-reorder-three-sharp" size={50} color="#00323D" />
        </View>
      </View>
      </View>
      <View style={styles.bottom}>
        <View style={{marginVertical:50}}>
         <View style={styles.align}>
          <Text style={{flex:0.1}}>
            <Octicons name="dot-fill" size={22} color="green" />
          </Text>
          <TextInput style={{flex:1,fontSize:16}} placeholder="Source"/>
          <Text style={styles.location}>
          <AntDesign name="downcircleo" size={24} color="black" />
          </Text>
        </View>
        <View style={styles.align}>
          <Text style={{flex:0.1}}>
            <Octicons name="dot-fill" size={22} color="red" />
          </Text>
          <TextInput style={{flex:1,fontSize:16}} placeholder="Destination"/>
          <Text style={styles.location}>
          <AntDesign name="downcircleo" size={24} color="black" />
          </Text>
        </View>
        </View>
         <View style={styles.btnctr}>
         <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntxt}>
            Request
          </Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntxt}>
            Invite
          </Text>
        </TouchableOpacity>
      </View>
      </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bottom:{
   flex:0.40,
   backgroundColor:'#00323D',
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
    borderWidth:1,
    bordercolor:'black',
  },
  top:{
  flex:0.60,
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
    marginHorizontal:50,
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
});
