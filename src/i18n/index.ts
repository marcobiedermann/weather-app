import i18n, { type InitOptions } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { isDevelopment } from '../constants/config';

const options = {
  debug: isDevelopment,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  lng: 'en',
} satisfies InitOptions;

i18n.use(LanguageDetector).use(Backend).use(initReactI18next).init(options);

export { options };
export default i18n;
