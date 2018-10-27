import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import {colors} from "../../theme";
import Text from "../../components/Text";

class Register extends Component {

    render(){
        return(
            <View style={styles.container}>
                <Text labelId="registerPage" textStyle={styles.registerPage} />
            </View>
        )
    }
}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.yellow
    },
    registerPage: {
        color: colors.white,
        fontSize: 36
    }
});
