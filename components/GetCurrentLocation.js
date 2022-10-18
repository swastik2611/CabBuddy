import Geolocation from 'react-native-geolocation-service';
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
   }) 
  }
 )};

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
