import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { isDevelopment } from '../constants/config';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: 'data/locales/{{lng}}/{{ns}}.json',
    },
    debug: isDevelopment,
    fallbackLng: 'en',
    lng: 'en',
  });

export default i18n;
