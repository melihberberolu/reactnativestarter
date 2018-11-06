import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import {colors} from "../../theme";
import navigation from '../../navigators/navigations';

import Text from '../../components/Text';
import Button from "../../components/Button";

class Welcome extends Component {

    loginButtonPressHandler = () => {
        console.log('clicked');
        navigation.navigate('Login');
    };

    registerButtonPressHandler = () => {
      navigation.navigate('Register')
    };

    render(){
        console.log('props:',this.props);
        return(
            <View style={styles.container}>
                <View style={styles.UIWrapper}>
                    <Text labelId="greetings" textStyle={styles.greetingsTxt} />
                    <Button btnStyle={styles.loginButton} onPress={() => this.loginButtonPressHandler()} labelId="buttons.login" btnTextStyle={styles.loginButtonText}/>
                    <Button btnStyle={styles.registerButton} onPress={() => this.registerButtonPressHandler()} labelId="buttons.register" btnTextStyle={styles.registerButtonText} />
                </View>
            </View>
        )
    }
}

export default  Welcome;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white
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
        color: colors.blue,
        fontSize: 20
    },
    loginButton:{
        marginTop: 10,
        backgroundColor: colors.blue,
        width: '100%'
    },
    loginButtonText:{
        color: colors.white
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
