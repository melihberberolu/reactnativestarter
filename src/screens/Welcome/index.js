import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import {colors} from "../../theme";
import navigation from '../../navigators/navigations';

import Text from '../../components/Text';
import Button from "../../components/Button";

class Welcome extends Component {

    loginButtonPressHandler = () => {
        navigation.navigate('Login');
    };

    registerButtonPressHandler = () => {
      navigation.navigate('Register')
    };

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.UIWrapper}>
                    <Text labelId="greetings" textStyle={styles.greetingsTxt} />
                    <Button btnStyle={styles.loginButton} onPress={() => this.loginButtonPressHandler()} labelId="buttons.login"/>
                    <Button btnStyle={styles.registerButton} onPress={() => this.registerButtonPressHandler()} labelId="buttons.login" btnTextStyle={styles.registerButtonText} />
                </View>
            </View>
        )
    }
}

export default  Welcome;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.red
    },
    UIWrapper:{
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    greetingsTxt:{
        color: colors.white,
        fontSize: 20
    },
    loginButton:{
        marginTop: 10,
        backgroundColor: colors.white,
        width: '100%'
    },
    registerButton:{
        marginTop: 10,
        backgroundColor: colors.black,
    },
    registerButtonText:{
        color: colors.white,
        fontSize: 16,
    }
});
