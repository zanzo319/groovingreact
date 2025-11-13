/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      'max-md': { max: '767px' },
      'max-sm': { max: '639px' },
    },
  },
  plugins: [],
};