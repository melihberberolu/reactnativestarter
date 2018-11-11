import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import {colors} from "../../theme";
import navigation from "../../navigators/navigations";

import Text from "components/Text";
import SmsVerificationForm from "./components/SmsVerificationForm";

class SmsVerification extends Component {

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.UIWrapper}>
                    <Text labelId="smsVerificationPage" textStyle={styles.smsVerificationTitle}/>
                    <SmsVerificationForm />
                </View>
            </View>
        );
    }
}

export default SmsVerification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    UIWrapper:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    smsVerificationTitle:{
        color: colors.black,
        fontSize: 36
    },
    confirmButtonStyle: {
        backgroundColor: colors.white,
        width: '100%',
        marginTop: 10
    },
    confirmButtonTextStyle: {
        color: colors.blue,
        fontSize: 18
    }
});
