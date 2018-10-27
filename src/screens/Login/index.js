import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import {colors} from "../../theme";
import navigation from '../../navigators/navigations';

import Text from "../../components/Text";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";

class Login extends Component{

    backButtonClickHandler = () => {
        navigation.goBack();
    };

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.UIWrapper}>
                    <Text labelId="loginPage" textStyle={styles.loginPageText} />
                    <TextInput  />
                    <Button labelId="buttons.back" btnStyle={styles.backButton} btnTextStyle={styles.backButtonTextStyle} onClick={() => this.backButtonClickHandler()} />
                </View>
            </View>
        )
    }
}

export default Login;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'gray',
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
    backButton: {
        backgroundColor: colors.green,
        width: '100%',
        marginTop: 20
    },
    backButtonTextStyle: {
        color: colors.white
    }
});
