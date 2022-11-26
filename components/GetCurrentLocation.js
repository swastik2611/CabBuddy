import Geolocation from 'react-native-geolocation-service';
// import Geolocation from '@react-native-community/geolocation';
// Geolocation.setRNConfiguration(config);
import tt from "@tomtom-international/web-sdk-services";
var lat;
var lon;
export function getLoc()
{
  return new Promise((resolve,reject)=>{
   Geolocation.getCurrentPosition((data)=>{
     lat=data.coords.latitude;
     lon=data.coords.longitude;
     resolve([lat,lon]);
     console.log(data);
   }) 
  }
 )};
/*
Geolocation.getCurrentPosition(
  //Will give you the current location
  (position) => {
    //getting the Longitude from the location json
    const currentLongitude =
      JSON.stringify(position.coords.longitude);
 
    //getting the Latitude from the location json
    const currentLatitude =
      JSON.stringify(position.coords.latitude);
      
   }, (error) => alert(error.message), { 
     enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 
   }
);

*/
export const fuzzySearch = (name) => {
    tt.services
      .fuzzySearch({
        key: "vHU6pZapwSCLHNgswp5XdDAJpdUkr0MG",
        query: name
      })
      .go()
      .then((res) => {
        console.log(res);
        const amendRes = res.results;
        console.log(amendRes)
        // setResult(amendRes)
        // console.log(result)
      })
      .catch((err) => {
        console.log(err);
      });
  };

//getLoc().then(console.log);
