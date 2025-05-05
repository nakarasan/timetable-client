/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppinsRegular', 'serif'],
        poppinsMedium: ['poppinsMedium', 'serif'],
        poppinsSemibold: ['poppinsSemibold', 'serif'],
        poppinsBold: ['poppinsBold', 'serif'],
      },
      fontSize: {
        h1: '16px',
        h2: '14px',
        p1: '13px',
        p2: '12px',
        p3: '11px',
      },
      colors: {
        darkBlue: '#001e77',
        darkGray: '#1e1e1e',
        lightGray: '#737373',
        bgGray: '#f9fafb',
        darkPink: '#c11e65',
      },
    },
  },
  plugins: [],
};
