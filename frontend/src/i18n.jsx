import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// i18n configuration
i18n
  .use(HttpApi) // load translations using http
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next
  .init({
    supportedLngs: ['en', 'es', 'fr'], // supported languages
    fallbackLng: 'en', // fallback language
    detection: {
      order: ['path', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // path to translation files
    },
    react: {
      useSuspense: false // for better performance
    }
  });

export default i18n;
