import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

import I18n from 'configs/i18n';
import { colors } from "theme";

const Text = ({textStyle, labelId, values}) => {

    return (
        <NativeText style={[styles.text, textStyle]}>{I18n.t(labelId, values)}</NativeText>
    )
};

export default Text;

const styles = StyleSheet.create({
    text: {
        color: colors.black,
        fontSize: 14,
    }
});
