import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, Image, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = type => {
    setSelected(type);
  };

  return <SafeAreaView style={styles.container}>
      <Button title="My Uploaded Images" onPress={() => handleSelect('image')} />
      <Button title="My Uploaded Videos" onPress={() => handleSelect('video')} />

      {selected === 'image' && <View style={styles.content}>
          <Text style={styles.title}>Uploaded Content</Text>
          <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
          <Button title="Close" onPress={() => setSelected(null)} />
          <Button title="Remove" onPress={() => {}} />
        </View>}

      {selected === 'video' && <View style={styles.content}>
          <Text style={styles.title}>Uploaded Content</Text>
          <Text style={styles.video}>Video Player Feature</Text>
          <Button title="Remove" onPress={() => {}} />
        </View>}
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    marginTop: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10
  },
  video: {
    fontSize: 16,
    color: 'gray',
    marginTop: 10
  }
});
export default ScreenComponent;