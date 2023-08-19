import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Button, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  return <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TextInput style={styles.input} onChangeText={setUsername} value={username} placeholder="Username" />
      <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="Password" secureTextEntry />
      <View style={styles.checkboxContainer}>
        <Button title={termsAccepted ? '✔' : '✖'} onPress={() => setTermsAccepted(!termsAccepted)} />
        <Text style={styles.label}>
          I accept the 
          <Text style={styles.link} onPress={() => {}}> Terms and Conditions </Text>
          and 
          <Text style={styles.link} onPress={() => {}}> Privacy Policy</Text>
        </Text>
      </View>
      <Button title="Sign Up" onPress={() => {}} />
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  label: {
    margin: 8
  },
  link: {
    color: 'blue'
  },
  forgotPassword: {
    color: 'blue',
    marginTop: 15,
    textAlign: 'center'
  }
});
export default SignUpScreen;