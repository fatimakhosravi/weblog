/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
  theme: {
    colors: {
      "costume-green": "#00C853",
      "costume-red": "#FE5656",
      "costume-black": "#000000",
      "costume-gray": "#333333"
    },
  }
};

