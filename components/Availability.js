import axios from 'axios';
import React, { useEffect } from 'react'
import { View,Text } from 'react-native';

export const Availability= ()=> {
//   const[from,setFrom]=React.useState("")
//   const [to, setTo] = React.useState("");
//   const [contact, setContact] = React.useState("");
//   const [vacant, setVacant] = React.useState(0); 
const [data,setData]=React.useState([]);
    console.log("show")
    useEffect(() => {
        console.log("in function1");
        async function fetchData() {
            console.log("in function2");
            const request = await axios.get("http://10.0.2.2:3000/availability");
            console.log("data is ",request.data);
            console.log("in function3")
            setData(request.data);
        }
        fetchData();
    }, []);
  return (
    <>
      <Text>Hello</Text>
      <View>
        <Text>{JSON.stringify(data)}</Text>
      </View>
    </>
  );}

