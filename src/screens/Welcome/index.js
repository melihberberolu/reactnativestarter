import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Welcome extends Component {
    render(){

        return(
            <View style={styles.container}>
                <Text>Welcome Screen</Text>
            </View>
        )
    }
}

export default  Welcome;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'red'
    }
});