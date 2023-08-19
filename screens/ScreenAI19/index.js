import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';

const App = () => {
  const place = {
    name: 'Club XYZ',
    category: 'Club/Bar',
    averageRate: 4.5,
    image: 'https://tinyurl.com/42evm3m3',
    location: '123 Street, City, Country',
    workingHours: '6PM - 4AM',
    entranceFee: 20,
    checkIns: 100,
    genderPercentage: {
      male: 40,
      female: 40,
      other: 20
    },
    averageAge: 25
  };
  return <SafeAreaView style={styles.container}>
      <Button title="Check-In" onPress={() => {}} />
      <Button title="Upload Content" onPress={() => {}} />
      <View style={styles.section}>
        <Text style={styles.title}>{place.name}</Text>
        <Image style={styles.image} source={{
        uri: place.image
      }} />
        <Text>Category: {place.category}</Text>
        <Text>Average Rate: {place.averageRate}</Text>
        <Text>Location: {place.location}</Text>
        <Text>Working Hours: {place.workingHours}</Text>
      </View>
      <View style={styles.section}>
        <Text>Entrance Fee: ${place.entranceFee}</Text>
        <Text>{place.checkIns} people have checked in</Text>
        <Text>
          Gender: {place.genderPercentage.male}% male, {place.genderPercentage.female}% female, {place.genderPercentage.other}% prefer not to say
        </Text>
        <Text>Average Age: {place.averageAge}</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  section: {
    marginVertical: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginVertical: 10
  }
});
export default App;