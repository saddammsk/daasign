/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'gray1': "#D2D2D2",
      },
      fontFamily: {
        avenir: ['Avenir', 'sans-serif'],
        avenir_medium: ['Avenir Medium', 'sans-serif'],
        avenir_black: ['Avenir Black', 'sans-serif'],
      },
      boxShadow:{
        'switchshadow': "2px 2px 4px 0px #00000040 inset",
        'switchshadowdot': "0px 4px 4px 0px #00000040 0px 1px 4px 0px #00000040 inset",
        'userDropdownShadow': "-3px 4px 11px 0px #00000040",
        'supportboxShadow': "0px 2px 14px 0px #00000080",
      }
    },
  },
  plugins: [],
};
