import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, Image, View } from 'react-native';

const PrivacyPolicyScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Image style={styles.logo} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.title}>Privacy Policy</Text>
        </View>
        <Text style={styles.text}>
          This is a placeholder for your privacy policy. Replace this text with your actual privacy policy.
          This text should include information about what data you collect, how you use it, and how you protect it.
          You should also include information about how users can contact you if they have any questions or concerns about their privacy.
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333'
  }
});
export default PrivacyPolicyScreen;