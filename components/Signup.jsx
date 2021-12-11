import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native';
let Logo = require('../src/logo.png')

export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.signUpContainer}>

            <View style={styles.signUpTop}>
                <Image source={Logo} />
                <Text>Sign up here</Text>
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder='Username'
                    onChangeText={(email) => setEmail(email)}
                    placeholderTextColor="#fff"
                />
            </View >
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder='Password'
                    onChangeText={(password) => setPassword(password)}
                    secureTextEntry={true}
                    placeholderTextColor="#fff"
                />
            </View >

            <TouchableOpacity>
                <Text style={styles.forgotButton}>Already Signed up?</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.btn}>Create Account</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    signUpTop: {
        padding: 10,
        marginBottom: 20,
    },

    signUpContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#F9DCC4",
        justifyContent: 'center',
    },

    inputView: {
        backgroundColor: "#646E78",
        borderRadius: 30,
        height: 50,
        marginBottom: 10,
        alignItems: "center",
        color: '#fff'
    },

    TextInput: {
        color: '#fff',
        textAlign: 'center',
        height: 50,
        flex: 1,
        padding: 20,
    },

    forgotButton: {
        height: 30,
        marginBottom: 30,
    },

    btn:
    {
        borderRadius: 25,
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        backgroundColor: "#383838",
    }
});
