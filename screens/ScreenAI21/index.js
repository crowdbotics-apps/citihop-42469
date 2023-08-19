import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, Image, TextInput, Picker } from 'react-native';

const App = () => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('image');
  const [content, setContent] = useState('https://tinyurl.com/42evm3m3');
  return <SafeAreaView style={_styles.IgIrPrkw}>
      <View style={_styles.EYlLZfCm}>
        <Text>Title</Text>
        <TextInput style={_styles.mHaiksaV} onChangeText={text => setTitle(text)} value={title} />
      </View>
      <View style={_styles.LBVvMtcp}>
        <Text>Type of Content</Text>
        <Picker selectedValue={type} style={_styles.qdsmEELZ} onValueChange={(itemValue, itemIndex) => setType(itemValue)}>
          <Picker.Item label="Image" value="image" />
          <Picker.Item label="Video" value="video" />
        </Picker>
      </View>
      <View style={_styles.BPlXgXCo}>
        <Text>Upload Content</Text>
        <Button title="Upload Photo/Camera Feature" onPress={() => {}} />
      </View>
      <View style={_styles.ZUGyarjF}>
        <Text>Display upload Content</Text>
        <Image style={_styles.UaeELIfg} source={{
        uri: content
      }} />
      </View>
      <View style={_styles.mbOhpAvu}>
        <Button title="Remove" onPress={() => setContent('https://tinyurl.com/42evm3m3')} />
        <Button title="Post Content" onPress={() => {}} />
        <Button title="Cancel" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

export default App;

const _styles = StyleSheet.create({
  IgIrPrkw: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  EYlLZfCm: {
    width: "80%",
    marginBottom: 20
  },
  mHaiksaV: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  LBVvMtcp: {
    width: "80%",
    marginBottom: 20
  },
  qdsmEELZ: {
    height: 50,
    width: "100%"
  },
  BPlXgXCo: {
    width: "80%",
    marginBottom: 20
  },
  ZUGyarjF: {
    width: "80%",
    marginBottom: 20
  },
  UaeELIfg: {
    width: "100%",
    height: 200
  },
  mbOhpAvu: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});