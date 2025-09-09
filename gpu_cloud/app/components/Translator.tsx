"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "../contexts/TranslationContext";

interface TranslatorProps {
  text: string;
}

export default function Translator({ text }: TranslatorProps) {
  const { currentLanguage } = useTranslation();
  const [translated, setTranslated] = useState(text);

  useEffect(() => {
    const translate = async () => {
      if (currentLanguage === "EN") {
        setTranslated(text);
        return;
      }

      try {
        const res = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text, targetLang: currentLanguage }),
        });
        const data = await res.json();
        setTranslated(data.translated || text);
      } catch {
        setTranslated(text);
      }
    };

    translate();
  }, [text, currentLanguage]);

  return <>{translated}</>;
}
