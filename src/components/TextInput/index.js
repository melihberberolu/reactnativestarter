import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

import {colors} from "../../theme";

const TextInput = (props) => {
    return(
        <NativeTextInput style={styles.baseStyle} { ...props } />
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
