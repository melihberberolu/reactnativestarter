import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Field, reduxForm } from 'redux-form/immutable';

import { width } from 'theme';

import TextInput from 'components/TextInput';
import Button from 'components/Button';
import navigation from "navigators/navigations";

class RegisterForm extends Component {

    render(){
        const { handleSubmit, registerButtonPressHandler } = this.props;
        return(
            <ScrollView
                contentContainerStyle={styles.container}
            >
                <Field
                    component={ TextInput }
                    name="name"
                    type="text"
                />
                <Field
                    component={ TextInput }
                    name="surname"
                    type="text"
                />
                <Field
                    component={ TextInput }
                    name="email"
                    type="email"
                />
                <Field
                    component={ TextInput }
                    name="password"
                    type="password"
                />
                <Button
                    labelId="buttons.register"
                    btnStyle={styles.registerButton}
                    onPress={handleSubmit(registerButtonPressHandler)}/>
            </ScrollView>
        )
    }
}

export default reduxForm({
    form: 'registerForm'
})(RegisterForm);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
