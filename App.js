import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//IMPORTS
import Signup from './components/Signup'
import Login from './components/Login'

// Add Top Navbar with navigation
// if statment checking if already logged in send to Home.jsx screen
// also if already signed up send to login

function login() {
  return (
    <Login />
  )
}

function signUp() {
  return (
    <Signup />
  )
}

function Logo() {
  return (
    <Image
      style={{ width: 100, height: 50 }}
      source={require('./src/logo.svg')}
    />
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={login} options={{
          headerTitle: () => <Logo />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#383838',
          },
        }} />
        <Stack.Screen name="Sign Up" component={signUp} options={{
          headerTitle: () => <Logo />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#383838',
          },
        }} />
      </Stack.Navigator>


    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9DCC4",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
