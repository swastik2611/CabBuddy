import React,{useState} from 'react'
import { StyleSheet,Text, View } from 'react-native'
import {Callout, enableLatestRenderer, Marker} from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
const DarkMode =
[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
]
enableLatestRenderer();
export const Map=()=>  {
  const [lat,setLat]=useState()
  const [lon,setLon]=useState()
    Geolocation.getCurrentPosition(data=>{
      setLat(data.coords.latitude)
      setLon(data.coords.longitude)
  })
//28.51913338908017, 77.36525008259567 128
//28.535670729456665, 77.36472530226712 pg
     return (
      <>
      <View style={styles.container}>
        <MapView
       provider={PROVIDER_GOOGLE}
       style={styles.map}
      //  customMapStyle={DarkMode}
       region={{
         latitude:Number(lat),
         longitude: Number(lon),
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
       >
        <Marker 
          coordinate={{
            latitude:Number(lat),
            longitude: Number(lon),
          }}
        >
          <Callout>
            <View>
              <Text>
                You
              </Text>
            </View>
          </Callout>
        </Marker>
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