import i18nBackend from 'i18next';
import Backend from 'i18next-fs-backend';

i18nBackend
    .use(Backend)
    .init({
        backend: {
            loadPath: './translations/{{lng}}.json',
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18nBackend;
