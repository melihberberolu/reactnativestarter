import React from 'react';
import { Text as NativeText } from 'react-native';
import I18n from '../../configs/i18n';

const Text = ({textStyle, labelId, values}) => {

    return (
        <NativeText style={textStyle}>{I18n.t(labelId, values)}</NativeText>
    )
};

export default Text;
