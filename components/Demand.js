import React, { useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  View,
  TextInput,
  Alert,
} from "react-native";

export const Demand = ({ navigation }) => {
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [vacant, setVacant] = React.useState(0);
  const [sourceCoordinates, setSourceCoordinates] = React.useState("");
  const [destinationCoordinates, setDestinationCoordinates] =
  React.useState("");
  const submit = () => {
    console.log("Submit");
    console.log("value", vacant, from, to, contact);
    if (from == "" || to == "" || contact == "") {
      return Alert.alert("Complete all fields");
    }
    if (vacant < 1 || vacant > 6) {
      return Alert.alert("Invalid Seat Count");
    }
    fetch("http://10.0.2.2:3000/journey", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: from,
        to: to,
        contact: contact,
        vacant: vacant,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        try {
          console.log(data.message);
          if (data.message === "User already exists") {
            Alert.alert("User already exists");
          } else {
            Alert.alert("Request posted");
            navigation.navigate("Availability");
          }
        } catch (e) {
          console.log("Error", e);
          Alert.alert("");
        }
      })
      .catch(function (error) {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
        Alert.alert("User already exists2");
        // setFrom("")
        // setTo("")
        // setContact("")
        // setVacant("")
      });
  };
  return (
    <>
      <View style={styles.body}>
        <View style={styles.top}>
          <Text style={styles.heading}>Request Seats</Text>
        </View>
        <View style={styles.middle}>
          <View style={styles.inpbox}>
            <Text style={styles.fieldname}>Source</Text>
            <TextInput
              style={styles.txtinp}
              onChangeText={(actualData) => setFrom(actualData)}
            />
          </View>
          <View style={styles.inpbox}>
            <Text style={styles.fieldname}>Destination</Text>
            <TextInput
              style={styles.txtinp}
              onChangeText={(actualData) => setTo(actualData)}
            />
          </View>
          <View style={styles.inpbox}>
            <Text style={styles.fieldname}>Contact</Text>
            <TextInput
              style={styles.txtinp}
              keyboardType="phone-pad"
              onChangeText={(actualData) => setContact(actualData)}
            />
          </View>
          <View style={styles.inpbox}>
            <Text style={styles.fieldname}>Required Seats</Text>
            <TextInput
              style={styles.txtinp}
              keyboardType="phone-pad"
              onChangeText={(actualData) => setVacant(actualData)}
            />
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.submit}>
            <TouchableOpacity style={styles.submitbtn} onPress={() => submit()}>
              <Text style={styles.submittxt}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#E6D0EA",
  },
  top: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },
  middle: {
    flex: 0.4,
  },
  bottom: {
    flex: 0.3,
    justifyContent: "center",
  },
  txtinp: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    height: 40,
    borderRadius: 20,
    paddingVertical: "1%",
    paddingLeft: "5%",
    fontSize: 20,
  },
  fieldname: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: "0.5%",
  },
  inpbox: {
    marginHorizontal: "10%",
    marginVertical: "3%",
  },
  submit: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.3,
  },
  submitbtn: {
    backgroundColor: "black",
    borderRadius: 40,
  },
  submittxt: {
    justifyContent: "center",
    paddingVertical: "2.5%",
    paddingHorizontal: "10%",
    fontSize: 20,
    color: "white",
  },
});
