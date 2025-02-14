import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      screens: {
        'xs': '320px',
        'sm': '425px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      colors: {
        'black-1000': '#181818',
        'black-1100':'#242424',
        'black-1200':'#101011',
        'black-1300':'#1E1E1E',
        'gray-1000':'#F5F4ED',
        'gray-1100':'#FCFBF8',
        'gray-1200':'#EFEBE0',
        'gray-1300':'#9DEDF6',
        'green-1000':'#DDFC9D',
        'blue-1000':'#C8B4FF',
        'orange-1000':'#FFBF9F',
        'gray-1400':'#D1FADF',
        'gray-1500':'#F8F8F4',
        'red-1000':'#FDE7DB',
        'gray-1600':'#CCC',
        'gray-1700':'#707070',
      },
      fontFamily: {
        'gilroy': ['Gilroy'],
        'grotesque-arabic-pro': ['Basis Grotesque Arabic Pro Md'],
        'grotesque-arabic-pro2': ['Basis Grotesque Arabic Pro'],
      },
      dropShadow: {
        '3xl': '0px 0px 16.9px 0px rgba(221, 252, 157, 0.80)',
      }
    },
  },
  plugins: [],
} satisfies Config;
