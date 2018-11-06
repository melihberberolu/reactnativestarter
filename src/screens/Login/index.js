import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import {colors} from "theme";

import LoginForm from './components/LoginForm';
import Text from "components/Text";

class Login extends Component{

    render(){
        console.log('props Login', this.props);
        return(
            <View style={styles.container}>
                <View style={styles.UIWrapper}>
                    <Text labelId="loginPage"/>
                    <LoginForm />
                </View>
            </View>
        )
    }
}

export default Login;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    UIWrapper:{
        flex: 1,
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginPageText: {
        color: colors.white,
        fontSize: 20,
    },
});
