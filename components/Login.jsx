import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native';
let Logo = require('../src/logo.png')


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.loginContainer}>

            <View style={styles.loginTop}>
                <Image source={Logo} />
                <Text>Login here</Text>
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder='Username'
                    onChangeText={(email) => setEmail(email)}
                />
            </View >
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder='Password'
                    onChangeText={(password) => setPassword(password)}
                    secureTextEntry={true}
                />
            </View >

            <TouchableOpacity>
                <Text style={styles.forgotButton}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.forgotButton}>Sign up here?</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.loginBtn}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    loginTop: {
        padding: 10,
        marginBottom: 20,
    },

    loginContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#F9DCC4",
        justifyContent: 'center',
    },

    inputView: {
        backgroundColor: "#383838",
        borderRadius: 30,
        height: 50,
        marginBottom: 10,
        alignItems: "center",
        color: '#fff'
    },

    TextInput: {
        color: '#F47E3E',
        textAlign: 'center',
        height: 50,
        flex: 1,
        padding: 20,
    },

    forgotButton: {
        height: 30,
        marginTop: 10
    },

    loginBtn:
    {
        borderRadius: 25,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        backgroundColor: "#F47E3E",
    }
});
