import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { colors } from '../../theme';

import Text from '../Text';

class Button extends Component{

    render(){
        const { onPress, labelId, btnStyle, btnTextStyle } = this.props;
        return(
            <TouchableOpacity onPress={onPress} >
                <View style={[styles.container, btnStyle]}>
                    <Text labelId={labelId} textStyle={[styles.textStyle, btnTextStyle]}/>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        borderWidth: StyleSheet.hairlineWidth * 1,
        borderColor: colors.transparent
    },
    textStyle:{
        color: colors.black,
        fontSize: 14,
    }
});

export default Button;
