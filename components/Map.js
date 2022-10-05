import React, { Component } from 'react'
import { StyleSheet,Text, View } from 'react-native'
import {enableLatestRenderer} from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

enableLatestRenderer();
export const Map=()=>  {
    return (
      <>
      <View style={styles.container}>
        <Text> textInComponent </Text>
        <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 28.535558,
         longitude: 77.364949,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
       >
       </MapView>
        </View>
        
      </>
    )
}
const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
    flex:1,
    width: null, 
    height:null ,
    resizeMode: 'cover',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
 head:{
    marginTop:30,
},
});