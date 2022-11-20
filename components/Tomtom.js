import React from 'react';
import { useState, useRef} from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import { WebView } from 'react-native-webview';
import mapTemplate from './map-template';
import {getLoc} from './GetCurrentLocation';
import AutoCompleteInput from "react-native-tomtom-autocomplete";
import SelectMap from './SelectMap'; 
// export var webRef

// var la,lo;
export const Tomtom=()=> {
  var webRef;
  // const webRef = useRef()
  const [mapCenter, setMapCenter] = useState('77.36481, 28.5356');
  // let [mapCenter, setMapCenter] = useState('-121.903, 37.361');



    // getLoc().then(function(result){
    //   la=result[0]
    //   lo=result[1]
    //   // setMapCenter(result[1]+','+result[0])
    //   // mapCenter=result
    //   setTimeout(onButtonPress, 1000);
    // })

    // const onButtonPress = () => {
    //   // const [lng, lat] = mapCenter.split(",");
    //   console.log(lo,la)
    //   if(webRef)
    //     webRef.injectJavaScript(`map.setCenter([${parseFloat(lo)}, ${parseFloat(la)}])`);
    //     // webRef.injectJavaScript(`map.setCenter([${parseFloat(lng)}, ${parseFloat(lat)}])`);
    // }

  // const handleMapEvent = (event) => {
  //   setMapCenter(event.nativeEvent.data)
  // }

  var sourceLocation;

  const destinationSelected = (destinationLocation) => {
    if(sourceLocation)
    {
      console.log(JSON.stringify(sourceLocation.poi.name, undefined, 4))
      console.log(JSON.stringify(destinationLocation.poi.name, undefined, 4));
      const finalLon = (destinationLocation.position.lon + sourceLocation.position.lon) / 2;
      const finalLat = (destinationLocation.position.lat + sourceLocation.position.lat) / 2;
      console.log("destination", destinationLocation.position.lon, destinationLocation.position.lat);
      console.log("Final: ", finalLon, finalLat);
      if(webRef)
        webRef.injectJavaScript(`map.setCenter([${parseFloat(finalLon)}, ${parseFloat(finalLat)}])`);
      else 
        console.log("Webref is undefined")
      // webRef.injectJavaScript(`map.setCenter([${parseFloat(sourceLocation.position.lon)}, ${parseFloat(sourceLocation.position.lat)}])`);
    }
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.buttons}> */}
        {/* <TextInput 
        style={styles.textInput}
        onChangeText={setMapCenter}
        value={mapCenter}>
        </TextInput> */}
        {/* <Button title="Set Center" onPress={onButtonPress}></Button> */}
        {/* {onButtonPress()} */}
      {/* </View> */}
      
      {/* Source */}
      <AutoCompleteInput style={styles.searchContainer}
        inputProps={{
            text: 'Search',
            placeholder: "🟢  Source",
            fontSize: 18,
            // placeholderTextColor: "#00323D",
            style: styles.searchContainer,
        }}
        // onPress={(item) => console.log('item', JSON.stringify(item, undefined, 4))}
        // onPress={(item) => sourceSelected(item)}
        onPress={(item) => sourceLocation = item}
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
            // style: styles.searchResultContainer,
        }}
        bottomDivider
        tomtomOptions={{ key: "vHU6pZapwSCLHNgswp5XdDAJpdUkr0MG" }}
      />

      <AutoCompleteInput style={styles.searchContainer}
        inputProps={{
            text: 'Search',
            placeholder: "🔴  Destination",
            fontSize: 18,
            // placeholderTextColor: "#00323D",
            style: styles.searchContainer,
        }}
        // onPress={(item) => console.log('item', item)}
        onPress={(item) => destinationSelected(item)}
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
            // style: styles.searchResultContainer,
        }}
        bottomDivider
        tomtomOptions={{ key: "vHU6pZapwSCLHNgswp5XdDAJpdUkr0MG" }}
      />

      {/* <WebView
        ref={(r) => (webRef = r)}
        onMessage={handleMapEvent}
        style={styles.map}
        originWhitelist={['*']}
        source={{ html: mapTemplate }}
      /> */}
      <SelectMap setMapCenter={setMapCenter} webRef={webRef}/>
  
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    zIndex:-1,
  },
  // map:{
  //   zIndex:-1,
  // },
  searchContainer:{
    // flex:1,
    // width: '100%',
    backgroundColor: 'transparent',
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    color:"black",
    backgroundColor:'white',
    // marginHorizontal:50,
    // marginVertical:10,
    // marginBottom:10,
    // padding:10,
    borderRadius:24,
    zIndex: 1,
    // fontSize:25,
   // width:'100%',
    // borderWidth:1,
    // bordercolor:'black',
  },
});