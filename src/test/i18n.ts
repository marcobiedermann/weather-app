import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import deTranslation from '../../public/locales/de/translation.json';
import enTranslation from '../../public/locales/en/translation.json';
import { options } from '../i18n';

i18n.use(initReactI18next).init({
  ...options,
  resources: {
    de: {
      translation: deTranslation,
    },
    en: {
      translation: enTranslation,
    },
  },
});

export default i18n;
