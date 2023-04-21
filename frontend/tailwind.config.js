/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './ecommerce/*.html', './assets/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [require('tailgrids/plugin')],
};
