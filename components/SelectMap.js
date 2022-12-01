import React, { Component } from 'react'
import WebView from 'react-native-webview'
import mapTemplate from './map-template';
import {getLoc} from './GetCurrentLocation';
// import {webRef} from './TomTom';

function SelectMap(props) {

    var la,lo;
    // var webRef;
    getLoc().then(function(result){
      la=result[0]
      lo=result[1]
      // setMapCenter(result[1]+','+result[0])
      // mapCenter=result
      setTimeout(onButtonPress, 1000);
    })

    const onButtonPress = () => {
    //   const [lng, lat] = props.mapCenter.split(",");
      console.log(lo,la)
      props.webRef = webRef;
    //   console.log("props webref", props.webRef)
    //   console.log("webref", webRef)
      if(webRef)
        webRef.injectJavaScript(`map.setCenter([${parseFloat(lo)}, ${parseFloat(la)}])`);
      else
        console.log("Webref is undefined")
        // webRef.injectJavaScript(`map.setCenter([${parseFloat(lng)}, ${parseFloat(lat)}])`)
    }

    const handleMapEvent = (event) => {
        props.setMapCenter(event.nativeEvent.data)
    }

    // <WebView
    //     ref={(r) => (webRef = r) }
    //     onMessage={handleMapEvent}
    //     originWhitelist={['*']}
    //     source={{ html: mapTemplate }}
    // />

  return (
   <WebView
        ref={(r) => (webRef = r)}
        onMessage={handleMapEvent}
        originWhitelist={['*']}
        source={{ html: mapTemplate }}
    />
  )
}

export default SelectMap


// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     zIndex:-1,
//   },
//   // map:{
//   //   zIndex:-1,
//   // },
//   searchContainer:{
//     // flex:1,
//     // width: '100%',
//     backgroundColor: 'transparent',
//     marginTop: 25,
//     marginLeft: 5,
//     marginRight: 5,
//     color:"black",
//     backgroundColor:'white',
//     // marginHorizontal:50,
//     // marginVertical:10,
//     // marginBottom:10,
//     // padding:10,
//     borderRadius:24,
//     zIndex: 1,
//     // fontSize:25,
//    // width:'100%',
//     // borderWidth:1,
//     // bordercolor:'black',
//   },
// });