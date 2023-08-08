import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './translations/en.json';
import frTranslation from './translations/fr.json';
import esTranslation from './translations/es.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      fr: {
        translation: frTranslation,
      },
      es: {
        translation: esTranslation,
      },
    },
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

export type TranslationFunction = (key: keyof typeof enTranslation) => string;
