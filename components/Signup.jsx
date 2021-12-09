import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

export default function Signup() {
    return (
        <View>
            <Text style={styles.signupText}>Sign up now!</Text>
            <Text>SETUP FORM HERE</Text>
            <a href="#">Already signed up? Login here.</a>
            <Text>Change to nav stacker ^</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    signupText: {
        fontSize: '2em'
    },
});