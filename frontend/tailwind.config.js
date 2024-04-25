const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  },
  darkMode: false,
  theme: {
    extend: {
      flexGrow: {
        '1': '1',
        '2': '2',
      },
      spacing: {
        '8': '2rem',
      },
      borderWidth: {
        '1': '1px',
      },
      borderRadius: {
        'lg': '1rem',
      },
      translate: {
        '35': '35%',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'faq': "url('../../frontend/public/pictures/faqImg.png')",

      },
      height: {
        '200': '40rem',
        '110': '23rem',
        '800': '800px',
        '30vh': '30vh',
      },
      width: {
        '200': '40rem',
        '110': '18rem',
      },
      right: {
        'custom': '1rem',
      },
      fontFamily: {
        'primary': ['Heebo', 'sans-serif'],
        'secondary': ['Signika', 'sans-serif'],
      },
      transitionProperty: {
        'maxHeight': 'max-height',
        'opacity': 'opacity',
        'transform': 'transform',
      },
    },
    colors: {
      ...colors,
      body: '#FFFFFF',
      primary: '#001f3f',
      secondary: '#89939E',
      accent: '#f5f5f5',
      lightGrey: '#F5F5F5',
      partner: '#f5f8fa',
    }
  },
  plugins: [],
  important: true,
};
