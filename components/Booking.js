import React from 'react';
import { StyleSheet,TouchableOpacity, Text, View,Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const Book=()=> { 
  return (
    <>
      <View style={{backgroundColor:'#ccc',flex:1}}>
      <View style={styles.locate}>
        <View style={{marginTop:10}}>
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
      </View>
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
    marginVertical:20,
    padding:12,
    borderRadius:7,
    fontSize:25,
    borderWidth:1,
    bordercolor:'black',
  },
  location:{
  },
});
