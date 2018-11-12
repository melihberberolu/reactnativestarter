import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { loginRequest } from 'store/actions/authentication';

import {colors} from 'theme';

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

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loginRequest: () => dispatch(loginRequest),

    }
};

export default connect( mapStateToProps, mapDispatchToProps )(Login);

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
