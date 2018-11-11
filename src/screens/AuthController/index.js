import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { getAccessToken } from "helpers/authentication";
import {colors} from "theme";
import navigation from "navigators/navigations";

class AuthController extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.authenticationController();
    }

    authenticationController = async() => {
        const accessToken = await getAccessToken();
        if(accessToken){
            navigation.resetSwitch('MainNavigator', 'Home');
        }else{
            navigation.resetSwitch('Auth', 'Welcome');
        }
    };

    render(){
        return(
            <View>
                <ActivityIndicator color={colors.blue} size="large"/>
            </View>
        )
    }
}

export default AuthController;

const styles = StyleSheet.create({
   container:{
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
   }
});
