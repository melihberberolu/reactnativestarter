import React, { Component } from  'react';
import { StyleSheet, View } from 'react-native';

import {colors} from "../../theme";
import navigation from "../../navigators/navigations";

import Text from "../../components/Text";
import Button from "../../components/Button";

class Profile extends Component{

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.UIWrapper}>
                    <Text labelId="myProfile" textStyle={styles.textStyle}/>
                    <Button labelId="buttons.logout" btnStyle={styles.logoutButtonStyle} btnTextStyle={styles.logoutButtonTextStyle} onPress={() => navigation.resetSwitch('Auth', 'Welcome')}/>
                </View>
            </View>
        )
    }
}

export default Profile;

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
    textStyle: {
        fontSize: 18,
        color: colors.white
    },
    logoutButtonStyle: {
        backgroundColor: colors.black,
        marginTop: 10
    },
    logoutButtonTextStyle: {
        color: colors.white,
        fontSize: 18
    }
});
