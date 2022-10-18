import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import { WebView } from 'react-native-webview';
import mapTemplate from './map-template';
import {getLoc} from './GetCurrentLocation';
var la,lo;
export const Tomtom=()=> {
  let webRef = undefined;
  let [mapCenter, setMapCenter] = useState('77.36481, 28.5356');
    getLoc().then(function(result){
      la=result[0]
      lo=result[1]
      mapCenter=result
      setTimeout(onButtonPress, 1000);
    })

    const onButtonPress = () => {
    webRef.injectJavaScript(`map.setCenter([${parseFloat(lo)}, ${parseFloat(la)}])`);
    
  }

  const handleMapEvent = (event) => {
    setMapCenter(event.nativeEvent.data)
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
      <WebView
        ref={(r) => (webRef = r)}
        onMessage={handleMapEvent}
        style={styles.map}
        originWhitelist={['*']}
        source={{ html: mapTemplate }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
  flex:1,
  }
});