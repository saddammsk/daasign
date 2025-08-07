'use client';
import { useTranslation } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/app/i18n';

interface TranslateProps {
  tKey: string;
  fallback?: string;
  className?: string;
  Tag: string;
}

/**
 * A client component to dynamically translate content.
 * @param tKey The key for the translation string (e.g., 'main_heading').
 * @param fallback An optional fallback string to display if the key isn't found.
 */
export default function Translate({ tKey, fallback, className, Tag }: TranslateProps) {
   
  
  return (
    <I18nextProvider i18n={i18n}>
      <Inner tKey={tKey} fallback={fallback} className={className} Tag={Tag} />
    </I18nextProvider>
  );
} 

function Inner({ tKey, fallback, className,  Tag = "div"}: { tKey: string; fallback?: string; className?: string; Tag:any }) {
    const { t } = useTranslation('common');
    return <Tag className={className}>{t(tKey, { defaultValue: fallback })}</Tag>;
  }