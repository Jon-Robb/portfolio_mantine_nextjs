import React, { useEffect, useState } from 'react';
import { Select } from '@mantine/core';
import i18n from '../../i18n/config';

const LanguageSelector = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (selectedLanguage : string) => {
    setLanguage(selectedLanguage);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
    console.log(`Language changed to: ${language}`);
  }, [language]);

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
