import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Login extends Component{


    render(){

        return(
            <View style={styles.container}>
                <Text>Login screen</Text>
            </View>
        )
    }
}

export default Login;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'gray'
    }
});