import axios from 'axios';
import React, { useEffect,useState} from 'react'
import { ScrollView,View,Text,StyleSheet } from 'react-native';

export const Availability= ()=> {
  //  const[from,setFrom]=React.useState("")
//   const [to, setTo] = React.useState("");
//   const [contact, setContact] = React.useState("");
const [count, setCount] = React.useState(1); 
const [data,setData]=React.useState("abcd");
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
    const list=()=>{
      return data.map((item)=>{
        return (
          <ScrollView>
            <View style={styles.group}>
              <Text style={styles.head}>Vacancy</Text>
              <Text style={styles.field}>From: {item.from}</Text>
              <Text style={styles.field}>To: {item.to}</Text>
              <Text style={styles.field}>Contact: {item.contact}</Text>
              <Text style={styles.field}>Vacant Seats: {item.vacant}</Text>
            </View>
          </ScrollView>
        );
      })
    }
    return (
      <>
        <ScrollView contentContainerStyle={styles.body}>
          {list()}
        </ScrollView>
      </>
    );}
const styles = StyleSheet.create({
  body: {
    backgroundColor: "#E6D0EA",
    paddingTop: 50,
  },
  group: {
    backgroundColor: "#A4BE7B",
    margin: 25,
    borderRadius: 30,
    padding: 20,
    borderWidth: 2,
    borderColor: "black",
  },
  field: {
    fontSize: 15,
    marginVertical: 10,
    marginHorizontal: "15%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "#fff",
    padding: 10,
  },
  head: {
    fontSize: 18,
    marginVertical: 1,
    justifyContent: "center",
    textAlign: "center",
  },
});
// {
//   /* <Text>
//             {JSON.stringify(data[0].contact)}{}
//           </Text>
//           <Text>
//             {JSON.stringify(data[0].from)}{"\n"}
//           </Text>
//           <Text>
//             {JSON.stringify(data[0].to)}{}
//           </Text>
//           <Text>
//             {JSON.stringify(data[0].vacant)}{"\n"}
//           </Text> */
// }
// {
//   /* <Text>{data.journey[0].to}</Text> */
// }
// <View>
//   {/* <Text>
//             {data.map((item)=> {
//             return(
//               <View>
//                 <Text>From: {item.from}</Text>
//                 <Text>To: {item.to}</Text>
//                 <Text>Contact: {item.contact}</Text>
//                 <Text>Vacant: {item.vacant}</Text>
//               </View>
//             );  
//           })}
//           </Text> */}
// </View>;