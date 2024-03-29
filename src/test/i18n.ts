import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import translation from '../../public/locales/en/translation.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en: {
      translation,
    },
  },
});

export default i18n;
