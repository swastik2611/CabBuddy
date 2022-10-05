import React, { Children } from 'react';
import { StyleSheet,TouchableOpacity, Text, View,Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Map } from './Map';

export const Request=()=> { 
  return (
    <>
      <View style={{backgroundColor:'#fff',flex:1}}>
      <View style={styles.locate}>
        <View style={{marginTop:-40,marginBottom:0}}>
          <Ionicons name="md-reorder-three-sharp" size={40} color="black" />
        </View>
        <View style={styles.align}>
          <Text style={{flex:0.1,}}>
            <Octicons name="dot-fill" size={22} color="green" />
          </Text>
          <Text style={{flex:1,fontSize:16}}>Source</Text>
          <Text style={styles.location}>
          <AntDesign name="downcircleo" size={24} color="black" />
          </Text>
        </View>
        <View style={styles.align}>
          <Text style={{flex:0.1}}>
            <Octicons name="dot-fill" size={22} color="red" />
          </Text>
          <Text style={{flex:1,fontSize:16}}>Destination</Text>
          <Text style={styles.location}>
          <AntDesign name="downcircleo" size={24} color="black" />
          </Text>
        </View>
      </View>
      <View style={styles.bottom}>
      <View style={styles.imgctr}>
        {/* <Image style={styles.img}  source={require('../assets/booking/map.png')}/> */}
        <Map/>
      </View>
      <View style={styles.btnctr}>
         <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntxt}>
            Request for Pooling
          </Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntxt}>
            Invite for Pooling
          </Text>
        </TouchableOpacity>
      </View>
      </View>
      </View>
      <View/>
    </>
  );
}

const styles = StyleSheet.create({
  locate:{
   flex:0.25,
   marginTop:30,
   backgroundColor:'lightblue',
   justifyContent:'center',
   textAlign:'center',
  },
  align:{
    flexDirection:'row',
    backgroundColor:'white',
    marginHorizontal:60,
    marginVertical:10,
    marginBottom:10,
    padding:12,
    borderRadius:7,
    fontSize:25,
    borderWidth:1,
    bordercolor:'black',
  },
  bottom:{
  flex:0.75,
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
    justifyContent:'center',
    alignSelf:"center",
    position:'absolute',
    marginTop:"42%",
  },
  btn:{
    paddingHorizontal:'10%',
    paddingVertical:'5%',
    backgroundColor:'white',
    borderColor:'black',
    borderWidth:3,
    marginTop:'4%',
    borderRadius:50,
  },
  btntxt:{
     textAlign:'center',
     fontWeight:'bold',
     fontSize:26,
  },
});
