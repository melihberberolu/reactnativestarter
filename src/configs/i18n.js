import I18n from 'react-native-i18n';

import { EN, TR } from '../translations';

I18n.fallbacks = true;

I18n.translations = {
    en: EN,
    tr: TR
};

export default I18n;
