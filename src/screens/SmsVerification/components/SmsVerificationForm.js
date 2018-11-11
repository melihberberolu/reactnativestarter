import React, { Component } from 'react';
import { ScrollView, StyleSheet } from "react-native";
import { Field, reduxForm } from 'redux-form/immutable';

import I18n from 'configs/i18n';
import navigation from "navigators/navigations";
import { width } from 'theme'

import TextInput from 'components/TextInput';
import Button from 'components/Button';

class SmsVerificationForm extends Component{

    smsVerificationButtonPressHandler = ( values ) => {
        console.log('sms form values', values);
        navigation.resetSwitch('MainNavigator', 'Home');
    };

    render(){
        const { handleSubmit } = this.props;
        return(
            <ScrollView
                contentContainerStyle={styles.container}
            >
                <Field
                    name="smsVerificationCode"
                    type="number"
                    component={ TextInput }
                    placeHolder={I18n.t('placeholders.smsVerificationCode')}
                    inputStyle={styles.input}
                />
                <Button
                    labelId="buttons.confirm"
                    btnStyle={styles.confirmButtonStyle}
                    onPress={handleSubmit(this.smsVerificationButtonPressHandler)}
                    btnTextStyle={styles.confirmButtonTextStyle} />
            </ScrollView>
        )
    }
}

export default reduxForm({
    form: 'smsVerificationForm'
})(SmsVerificationForm);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    input: {
        width: width - 40
    }
})
