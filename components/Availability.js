import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { View,Text } from 'react-native';

export const Availability= ()=> {
//   const[from,setFrom]=React.useState("")
//   const [to, setTo] = React.useState("");
//   const [contact, setContact] = React.useState("");
//   const [vacant, setVacant] = React.useState(0); 
const [data,setData]=React.useState();
    console.log("show")
    useEffect(() => {
        console.log("in function1");
        async function fetchData() 
        {
            console.log("in function2");
            try 
            {
                // const res = await axios.get("https://jsonplaceholder.typicode.com/users");
                const res = await axios.get("http:192.168.1.10:3000/availability"
                );
                console.log("in function3");
                console.log(res.data);
                setData(res.data);
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
      <Text>Hello</Text>
      <View>
        <Text>
            {JSON.stringify(data)}
        </Text>
      </View>
    </>
  );}

