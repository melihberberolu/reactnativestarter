import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import navigation from "../../navigators/navigations";
import {colors} from "../../theme";

import Text from "components/Text";
import Button from "components/Button";

class Home extends Component{

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.UIWrapper}>
                    <Text labelId="home" />
                    <Button btnStyle={styles.profileButton} btnTextStyle={styles.profileButtonText} labelId="buttons.seeMyProfile" onPress={() => navigation.navigate('Profile')}/>
                </View>
            </View>
        )
    }
}

export default Home;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    UIWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileButton: {
        backgroundColor: colors.gray,
        marginTop: 10
    },
    profileButtonText: {
        color: 'white',
        fontSize: 18
    }
});
