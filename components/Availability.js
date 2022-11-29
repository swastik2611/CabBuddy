import axios from 'axios';
import React, { useEffect,useState} from 'react'
import { View,Text,StyleSheet } from 'react-native';

export const Availability= ()=> {
//   const[from,setFrom]=React.useState("")
//   const [to, setTo] = React.useState("");
//   const [contact, setContact] = React.useState("");
//   const [vacant, setVacant] = React.useState(0); 
const [data,setData]=React.useState();
const [d,setD]=React.useState();
    console.log("show")
    useEffect(() => {
        console.log("in function1");
        async function fetchData() 
        {
            console.log("in function2");
            try 
            {
                // const res = await axios.get("https://jsonplaceholder.typicode.com/users");
                const res = await axios.get("http:172.16.165.82:3000/availability"
                );
                console.log("in function3");
                console.log(res.data);
                 setData(res.data);
                setD(res.data.from);
            } 
            catch (error) 
            {
              console.log(error);
            }
            // const request = await axios.get("http://localhost:3000/availability");
            // console.log("data is ",request.data);
        }
        fetchData();
    }, []);
    return (
      <>
        <View style={styles.body}>
          <Text >{JSON.stringify(data)}</Text>
          {/* <Text>{data.journey[0].to}</Text> */}
          <View>
            {/* <Text>
            {data.map((item)=> {
            return(
              <View>
                <Text>From: {item.from}</Text>
                <Text>To: {item.to}</Text>
                <Text>Contact: {item.contact}</Text>
                <Text>Vacant: {item.vacant}</Text>
              </View>
            );  
          })}
          </Text> */}
          </View>
        </View>
      </>
    );}
const styles = StyleSheet.create({
  body:{
    display:'flex',
    flexDirection:'row',
    height: '100%',
    paddingLeft: 50,
  alignItems:"center",
  }
});
