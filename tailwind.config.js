/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      pink: {
        100: '#fe5395',
        200: '#df4783',
        300: '#dc4782',
        400: '#ce4177',
      },
      white: '#ffffff',
    },
  },
  plugins: [],
};
