import { useEffect, useState } from 'react';
import { Select } from '@mantine/core';
import i18n from '../../i18n/config';

const LanguageSelector = () => {
  const supportedLanguages = ['en', 'fr', 'es'];
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (selectedLanguage : string) => {
    setLanguage(selectedLanguage);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  useEffect(() => {
    const browserLanguage = navigator.language.split('-')[0];

    if (supportedLanguages.includes(browserLanguage)) {
      setLanguage(browserLanguage);
    } else {
      const supportedBrowserLanguage = navigator.languages.map(lang => lang.split('-')[0]).find(lang => supportedLanguages.includes(lang));

      if (supportedBrowserLanguage) {
        setLanguage(supportedBrowserLanguage);
      }
    }
  }, []);

  return (
    <Select
      label="Language"
      data={[
        { value: 'en', label: 'English' },
        { value: 'fr', label: 'Français' },
        { value: 'es', label: 'Español' },
      ]}
      value={language}
      onChange={handleLanguageChange}
    />
  );
};

export default LanguageSelector;
