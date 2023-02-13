/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: 'hsl(25, 97%, 53%)',
        white: 'hsl(0, 0%, 100%)',
        'light-gray': 'hsl(217, 12%, 63%)',
        'medium-gray': 'hsl(216, 12%, 54%)',
        'dark-blue': 'hsl(213, 19%, 18%)',
        'medium-dark-blue': 'hsl(212, 40%, 9%)',
        'very-dark-blue': 'hsl(216, 12%, 8%)',
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
      },
      fontSize: {
        base: ['15px', '22px'],
      },
    },
    screens: {
      mobile: '375px',
      desctop: '1440px',
    },
  },
  plugins: [],
};
