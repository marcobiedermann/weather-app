import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';
import { isDevelopment } from '../utils/environment';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: 'data/locales/{{lng}}/{{ns}}.json',
    },
    debug: isDevelopment(),
    fallbackLng: 'en',
    lng: 'de',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
