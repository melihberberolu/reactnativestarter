import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

import {colors} from "theme";

const TextInput = ({input, inputStyle, ...inputProps}) => {
    console.log(input);
    return(
        <NativeTextInput
            style={[styles.baseStyle, inputStyle]}
            {...inputProps}
            onChangeText={input.onChange}
            onBlur={input.onBlur}
            onFocus={input.onFocus}
            value={input.value}
        />
    )
};

const styles = {
    baseStyle:{
        width: '100%',
        borderBottomWidth: StyleSheet.hairlineWidth * 1,
        borderBottomColor: colors.black
    }
};

export default TextInput;
