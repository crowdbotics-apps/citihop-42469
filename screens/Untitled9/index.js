import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled9 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => {
        navigation.navigate("ScreenAI10");
      }}><Text style={styles.jyKPACop}>{"Notifications"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI12");
      }}><Text style={styles.nujwulAQ}>{"settings"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI17");
      }}><Text style={styles.WnShgEVU}>{"Set Check-in option"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI19");
      }}><Text style={styles.XIujHZSh}>{"Specific Place"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI18");
      }}><Text style={styles.mkhoOBIn}>{"My Favorite Place"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI23");
      }}><Text style={styles.NdtNsZqU}>{"My Uploads"}</Text></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  jyKPACop: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  nujwulAQ: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  WnShgEVU: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  XIujHZSh: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  mkhoOBIn: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  NdtNsZqU: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled9;