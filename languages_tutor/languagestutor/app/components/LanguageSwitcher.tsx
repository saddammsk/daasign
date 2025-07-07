'use client';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import { useDirection } from '../hooks/useDirection';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  useDirection();

  return (
    <div>
      <select
        id="language-select"
        onChange={changeLanguage}
        value={i18n.language}
        className='bg-transparent text-sm rounded-md px-0.5 py-1 text-white outline-none cursor-pointer'
      >
        <option className='bg-white text-black' value="en">English</option>
        <option className='bg-white text-black' value="ar">Arabic</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
