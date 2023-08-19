import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';

const UserProfileScreen = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('male');
  const [date, setDate] = useState('09-04-1990');
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TextInput style={styles.input} onChangeText={setName} value={name} placeholder="Name" />
      <View style={styles.radioContainer}>
        <RadioButton value="male" status={gender === 'male' ? 'checked' : 'unchecked'} onPress={() => setGender('male')} />
        <Text>Male</Text>
        <RadioButton value="female" status={gender === 'female' ? 'checked' : 'unchecked'} onPress={() => setGender('female')} />
        <Text>Female</Text>
      </View>
      <DatePicker style={styles.datePicker} date={date} mode="date" placeholder="select date" format="DD-MM-YYYY" confirmBtnText="Confirm" cancelBtnText="Cancel" onDateChange={date => {
      setDate(date);
    }} />
      <Button title="Save" onPress={() => console.log('Saved')} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 20,
    paddingLeft: 10
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20
  },
  datePicker: {
    width: '80%',
    marginBottom: 20
  }
});
export default UserProfileScreen;