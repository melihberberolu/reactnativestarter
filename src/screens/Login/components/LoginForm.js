import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Field, reduxForm } from 'redux-form/immutable';
import I18n from 'configs/i18n';

import navigation from "navigators/navigations";
import { colors, width } from "theme";
import { makeRequest } from "helpers/request";
import { POST } from "constants";

import Button from "components/Button";
import TextInput from "components/TextInput";

class LoginForm extends Component{

    loginButtonClickHandler = (values) => {
        console.log('Submit values', values);
        const response = makeRequest(POST, 'controller/user/login.php', {...values});
        console.log(response);
        navigation.navigate('SmsVerification');
    };

    render(){
        const { handleSubmit } = this.props;
        console.log('Login form', this.props);
        return(
            <ScrollView
                contentContainerStyle={styles.container}
            >
                <Field
                    component={ TextInput }
                    name="email"
                    type="email"
                    placeHolder={I18n.t('placeholders.email')}
                    placeHolderTextColor={colors.green}
                    inputStyle={styles.input}
                />
                <Field
                    component={ TextInput }
                    name="password"
                    type="secretWord"
                    placeHolder={I18n.t('placeholders.email')}
                    placeHolderTextColor={colors.green}
                    inputStyle={styles.input}
                />
                <Button
                    labelId="buttons.login"
                    btnStyle={styles.loginButton}
                    btnTextStyle={styles.loginButtonTextStyle}
                    onPress={handleSubmit(this.loginButtonClickHandler)} />
            </ScrollView>
        )
    }
};

export default reduxForm({
    form: 'loginForm'
})(LoginForm);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: width - 40,
        marginTop: 10,
    },
    loginButton: {
        backgroundColor: colors.green,
        width: '100%',
        marginTop: 20
    },
    loginButtonTextStyle: {
        color: colors.white
    }
});
