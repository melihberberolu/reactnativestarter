import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import navigation from "navigators/navigations";
import { FirebaseAuth } from 'configs/firebase';

import Text from "components/Text";
import { colors } from "theme";
import RegisterForm from "./components/RegisterForm";

class Register extends Component {

    registerButtonPressHandler = async ( values ) => {
        try{
            console.log('Register Values',values);
            console.log(FirebaseAuth);
            const userRegister = await FirebaseAuth.createUserWithEmailAndPassword(values.email,values.password);
            console.log('Refresh Token',userRegister.user.refreshToken);
            const accessToken = await userRegister.user.getIdTokenResult();
            console.log('Register end', accessToken.token, accessToken.expirationTime, userRegister.refreshToken);
        }catch(error){
            console.log(error.code);
            console.log('register error',error.message);
        }

    };


    render(){
        return(
            <View style={styles.container}>
                <View style={styles.UIWrapper}>
                    <Text labelId="registerPage" textStyle={styles.registerPage} />
                    <RegisterForm registerButtonPressHandler={this.registerButtonPressHandler} />
                </View>
            </View>
        )
    }
}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        width: '100%'
    },
    UIWrapper:{
        flex: 1,
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    registerPage: {
        color: colors.blue,
        fontSize: 36
    },
    registerButton: {
        backgroundColor: colors.gray,
        marginTop: 10,
        width: '100%'
    },
    registerButtonText: {
        color: colors.white,
    }
});
