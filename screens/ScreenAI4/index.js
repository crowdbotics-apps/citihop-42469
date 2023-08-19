import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, Image } from 'react-native';

const TermsAndConditionsScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image style={styles.logo} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.header}>Terms and Conditions</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollView: {
    marginHorizontal: 20
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    margin: 20
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    lineHeight: 24
  }
});
export default TermsAndConditionsScreen;