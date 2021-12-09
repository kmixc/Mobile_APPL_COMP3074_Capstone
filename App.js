import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Signup from './components/Signup'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.deleteLater}>
        <Text>Add Top Navbar with navigation</Text>
        <Text>if statment checking if already logged in send to Home.jsx screen</Text>
        <Text>also if already signed up send to login</Text>
      </View>

      <Signup />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteLater: {
    padding: "50px",
  }
});
