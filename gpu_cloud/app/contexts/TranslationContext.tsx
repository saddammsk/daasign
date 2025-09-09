"use client";
import { createContext, useContext, useState, ReactNode, FC } from "react";

interface TranslationContextType {
  currentLanguage: string;
  setCurrentLanguage: (lang: string) => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: FC<TranslationProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>("EN");

  return (
    <TranslationContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) throw new Error(
    "useTranslation must be used within a TranslationProvider"
  );
  return context;
};
