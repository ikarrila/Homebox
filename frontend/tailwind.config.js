/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        '200': '40rem',
        '110': '23rem',
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
    },
    colors: {
      body: '#FFFAFA',
      dark: '#E2DDDD', /* darker div bg */
      black: '#000000',
      white: '#FFFFFF',
    }
  },
  plugins: [],
};
