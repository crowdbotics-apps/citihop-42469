import React from 'react';
import { SafeAreaView, View, Text, Image, Button, FlatList, StyleSheet } from 'react-native';
const data = [{
  id: '1',
  name: 'Place 1',
  category: 'Club/Bar',
  rate: '4.5',
  location: 'Location 1',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '2',
  name: 'Place 2',
  category: 'Club/Bar',
  rate: '4.2',
  location: 'Location 2',
  image: 'https://tinyurl.com/42evm3m3'
} // ... add more places as needed
];

const PlaceItem = ({
  item
}) => <View style={styles.itemContainer}>
    <Image source={{
    uri: item.image
  }} style={styles.image} />
    <Text style={styles.name}>{item.name}</Text>
    <Text style={styles.category}>{item.category}</Text>
    <Text style={styles.rate}>{item.rate}</Text>
    <Text style={styles.location}>{item.location}</Text>
    <Button title="Show more" onPress={() => {}} />
    <Button title="Remove" onPress={() => {}} />
  </View>;

const PlacesScreen = () => <SafeAreaView style={styles.container}>
    <FlatList data={data} renderItem={PlaceItem} keyExtractor={item => item.id} />
  </SafeAreaView>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10
  },
  category: {
    fontSize: 16,
    color: '#666',
    marginTop: 5
  },
  rate: {
    fontSize: 16,
    color: '#666',
    marginTop: 5
  },
  location: {
    fontSize: 16,
    color: '#666',
    marginTop: 5
  }
});
export default PlacesScreen;