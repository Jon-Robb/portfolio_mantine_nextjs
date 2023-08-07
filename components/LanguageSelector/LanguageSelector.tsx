import { useEffect, useState } from 'react';
import { Select } from '@mantine/core';
import i18n from '../../i18n/config';

const DEFAULT_LANGUAGE = 'en';

const LanguageSelector = () => {
  const [language, setLanguage] = useState<string>(DEFAULT_LANGUAGE);
  const supportedLanguages: Record<string, string> = {
    en: 'English',
    fr: 'Français',
    es: 'Español' };

  const handleLanguageChange = (selectedLanguage : string) => {
    i18n.changeLanguage(selectedLanguage);
    setLanguage(selectedLanguage);
  };

   useEffect(() => {
    const browserLanguages = [navigator.language.split('-')[0], ...navigator.languages.map(lang => lang.split('-')[0])];
    const detectedLanguage = browserLanguages.find(lang => supportedLanguages[lang]);

    if (detectedLanguage) {
      i18n.changeLanguage(detectedLanguage);
      setLanguage(detectedLanguage);
    } else {
      i18n.changeLanguage(DEFAULT_LANGUAGE);
      setLanguage(DEFAULT_LANGUAGE);
    }
  }, []);

  return (
    <Select
      label="Language"
      data={Object.entries(supportedLanguages).map(([value, label]) => ({ value, label }))}
      value={language}
      onChange={handleLanguageChange}
    />
  );
};

export default LanguageSelector;
