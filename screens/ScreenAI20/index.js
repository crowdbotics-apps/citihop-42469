import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, TextInput, TouchableOpacity } from 'react-native';

const CheckInScreen = () => {
  const [feePaid, setFeePaid] = useState(false);
  const [feeAmount, setFeeAmount] = useState('');

  const handleFeePaid = () => {
    setFeePaid(!feePaid);
  };

  return <SafeAreaView style={_styles.FsQZuoZW}>
      <Button title="Close" onPress={() => {}} />
      <Text style={_styles.HKpCKDva}>Successfully Checked In</Text>
      <Text style={_styles.yMIjzOzT}>Place Name</Text>
      <Text style={_styles.jzqoOVTG}>Entrance Fee</Text>
      <View style={_styles.OmEAJQcG}>
        <TouchableOpacity style={{
        backgroundColor: feePaid ? 'gray' : 'green',
        padding: 10,
        borderRadius: 10
      }} onPress={handleFeePaid}>
          <Text style={_styles.OCQCunOk}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
        backgroundColor: !feePaid ? 'gray' : 'green',
        padding: 10,
        borderRadius: 10
      }} onPress={handleFeePaid}>
          <Text style={_styles.GUitIBiu}>No</Text>
        </TouchableOpacity>
      </View>
      {feePaid && <TextInput style={_styles.uQiHJWnK} onChangeText={text => setFeeAmount(text)} value={feeAmount} placeholder="Enter fee amount" keyboardType="numeric" />}
    </SafeAreaView>;
};

export default CheckInScreen;

const _styles = StyleSheet.create({
  FsQZuoZW: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  HKpCKDva: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 20
  },
  yMIjzOzT: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 20
  },
  jzqoOVTG: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 20
  },
  OmEAJQcG: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    padding: 20
  },
  OCQCunOk: {
    color: "white",
    fontSize: 18
  },
  GUitIBiu: {
    color: "white",
    fontSize: 18
  },
  uQiHJWnK: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginTop: 20
  }
});