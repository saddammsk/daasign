// components/PageWrapper.tsx
'use client';

import { useTranslation } from '../contexts/TranslationContext';
import { useEffect } from 'react';

interface PageWrapperProps {
     children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
     const { currentLanguage } = useTranslation();

     useEffect(() => {
          // This effect will run when the language changes
          // We'll use a mutation observer to find and translate text nodes
          if (currentLanguage === 'EN') return; // No translation needed for English

          const translatePageContent = async () => {
               // Get all text nodes that need translation
               const walker = document.createTreeWalker(
                    document.body,
                    NodeFilter.SHOW_TEXT,
                    {
                         acceptNode: (node) => {
                              // Only translate text nodes that are not in inputs, textareas, scripts, etc.
                              if (
                                   node.parentElement &&
                                   !['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT', 'OPTION'].includes(
                                        node.parentElement.tagName
                                   ) &&
                                   node.textContent &&
                                   node.textContent.trim().length > 0 &&
                                   // Avoid translating numbers and special characters only
                                   /[a-zA-Z]/.test(node.textContent)
                              ) {
                                   return NodeFilter.FILTER_ACCEPT;
                              }
                              return NodeFilter.FILTER_REJECT;
                         }
                    }
               );

               const textNodes: Node[] = [];
               let node;
               while ((node = walker.nextNode())) {
                    textNodes.push(node);
               }

               // Translate each text node
               for (const node of textNodes) {
                    const originalText = node.textContent;
                    if (!originalText || originalText.trim().length === 0) continue;

                    try {
                         const response = await fetch('/api/translate', {
                              method: 'POST',
                              headers: {
                                   'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({
                                   text: originalText,
                                   targetLang: currentLanguage, // ✅ matches API
                              }),
                         });

                         if (response.ok) {
                              const data = await response.json();
                              node.textContent = data.translatedText;
                         }
                    } catch (error) {
                         console.error('Error translating text:', error);
                    }
               }
          };

          translatePageContent();
     }, [currentLanguage]);

     return <>{children}</>;
};

export default PageWrapper;