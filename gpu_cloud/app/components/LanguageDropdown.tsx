"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useTranslation } from "../contexts/TranslationContext";

interface Language {
  code: string;
  name: string;
  flag: string;
}

export default function LanguageDropdown() {
  const { currentLanguage, setCurrentLanguage } = useTranslation();

  const languages: Language[] = [
    { code: "EN", name: "English", flag: "/images/usa-flag.png" },
    { code: "DE", name: "Deutsch", flag: "/images/germany-flag.png" },
    { code: "FR", name: "Français", flag: "/images/france-flag.png" },
    { code: "ES", name: "Español", flag: "/images/spain-flag.png" },
  ];

  const selectedLanguage =
    languages.find((lang) => lang.code === currentLanguage) || languages[0];

  const handleLanguageSelect = (languageCode: string) => {
    setCurrentLanguage(languageCode);
  };

  return (
    <div className="relative">
      <Menu>
        <MenuButton className="inline-flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-xs font-medium border border-gray-300 dark:border-gray-600 dark:text-gray-200 text-black">
          <img
            src={selectedLanguage.flag}
            alt={selectedLanguage.name}
            width={20}
            height={15}
          />
          <span>{selectedLanguage.code}</span>
        </MenuButton>

        <MenuItems className="absolute right-0 mt-1 w-[140px] rounded-lg border border-gray-300 bg-white dark:bg-black dark:border-gray-600 shadow-lg focus:outline-none z-50">
          {languages.map((language) => (
            <MenuItem key={language.code}>
              <button
                onClick={() => handleLanguageSelect(language.code)}
                className="group flex w-full items-center gap-2 text-sm font-normal py-1.5 px-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              >
                <img
                  src={language.flag}
                  alt={language.name}
                  width={20}
                  height={15}
                />
                {language.name}
              </button>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
}
