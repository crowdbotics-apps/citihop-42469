import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CheckInScreen = () => {
  const [selectedOption, setSelectedOption] = useState('Automatic');
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Button title="Close" onPress={() => {}} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Set Check-In option</Text>
        <TouchableOpacity style={styles.option} onPress={() => setSelectedOption('Automatic')}>
          <Image style={styles.image} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.optionText}>Automatic Check-in</Text>
          {selectedOption === 'Automatic' && <Text style={styles.selected}>Selected</Text>}
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => setSelectedOption('Manual')}>
          <Image style={styles.image} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.optionText}>Manual Check-in</Text>
          {selectedOption === 'Manual' && <Text style={styles.selected}>Selected</Text>}
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Button title="Save" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    padding: 20
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  optionText: {
    fontSize: 18
  },
  selected: {
    marginLeft: 10,
    color: 'green'
  },
  footer: {
    padding: 20
  }
});
export default CheckInScreen;