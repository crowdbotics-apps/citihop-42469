import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Button } from 'react-native';

const LocationAccessScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.title}>Allow Location Access</Text>
        <Text style={styles.description}>
          We need to access your location to provide better service.
        </Text>
        <View style={styles.buttonContainer}>
          <Button title="Allow always" onPress={() => {}} />
          <Button title="Allow only when using the app" onPress={() => {}} />
          <Button title="Don't allow" onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20
  },
  buttonContainer: {
    width: '100%'
  }
});
export default LocationAccessScreen;