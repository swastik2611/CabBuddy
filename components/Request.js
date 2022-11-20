import React from 'react';
import { StyleSheet,TouchableOpacity, Text,ScrollView, View,TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Map } from './Map';
import { Tomtom } from './Tomtom';
import { services } from '@tomtom-international/web-sdk-services';
//import SearchBox from '@tomtom-international/web-sdk-plugin-searchbox';
import searchOptions from './searchOptions';
import AutoCompleteInput from "react-native-tomtom-autocomplete";


export const Request=()=> { 
  return (
    <>
      <View style={{flex:1}}>
      <View style={styles.top}>
      <View style={styles.imgctr}>
        <Tomtom/>
        <View style={{marginTop:20,marginLeft:5,zIndex:1}}>
          <Ionicons name="md-reorder-three-sharp" size={50} color="#00323D" />
        </View>
      </View>
      </View>
      <View style={styles.bottom}>
        <View style={{marginVertical:50}}>
         {/* <View style={styles.align}> */}
          {/* <Text style={{flex:0.1}}>
            <Octicons name="dot-fill" size={22} color="green" />
          </Text> */}
          {/* <Text style={{flex:1,fontSize:16}} placeholder="Source"> */}
            {/* <AutoCompleteInput style={styles.searchContainer}
              inputProps={{
                  text: 'Search',
                  placeholder: "🔴  Source",
                  fontSize: 18,
                  // placeholderTextColor: "#00323D",
                  style: styles.searchContainer,
              }}
              onPress={(item) => console.log('item', item)}
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
                  style: styles.searchResultContainer,
              }}
              // bottomDivider
              tomtomOptions={{ key: "vHU6pZapwSCLHNgswp5XdDAJpdUkr0MG" }}
            /> */}
{/* </Text> */}
          {/* <Text style={styles.location}>
          <AntDesign name="downcircleo" size={24} color="black" />
          </Text>
        </View> */}
        {/* <View style={styles.align}>
          <Text style={{flex:0.1}}>
            <Octicons name="dot-fill" size={22} color="red" />
          </Text>
          <TextInput style={{flex:1,fontSize:16}} placeholder="Destination"/>
          <Text style={styles.location}>
          <AntDesign name="downcircleo" size={24} color="black" />
          </Text>
        </View> */}
        </View>
         <View style={styles.btnctr}>
         <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntxt}>
            Request
          </Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntxt}>
            Invite
          </Text>
        </TouchableOpacity>
      </View>
      </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bottom:{
   flex:0.20,
   backgroundColor:'#00323D',
   justifyContent: "flex-start",
  },
  align:{
    flexDirection:'row',
    backgroundColor:'white',
    marginHorizontal:50,
    marginVertical:10,
    marginBottom:10,
    padding:12,
    borderRadius:24,
    fontSize:25,
   // width:'100%',
    borderWidth:1,
    bordercolor:'black',
  },
  top:{
  flex:0.80,
  },
  imgctr:{
    flex:1,
  },
  img: {
    flex:1,
    width: null, 
    height:null ,
    resizeMode: 'cover',
  },
  btnctr:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:50,
  },
  btn:{
    paddingVertical:"2.5%",
    backgroundColor:'white',
    borderColor:'black',
    borderWidth:3,
    borderRadius:50,
    width:'45%',
  },
  btntxt:{
     textAlign:'center',
     fontWeight:'bold',
     fontSize:24,
  },
  searchContainer:{
    // flex:1,
    // width: '100%',
    color:"black",
    backgroundColor:'white',
    marginHorizontal:50,
    marginVertical:10,
    marginBottom:10,
    padding:10,
    borderRadius:24,
    // fontSize:25,
   // width:'100%',
    borderWidth:1,
    bordercolor:'black',
  },
  searchResultContainer:{
    // flex:1,
    color:"black",
    backgroundColor:'white',
    margin: 0
  }

});
