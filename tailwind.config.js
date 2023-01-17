/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      "fontFamily": {
        "iranyekan": ["IRANYekan"]
      }
    },
    // colors: {
    //   "costume-green": "#00C853",
    //   "costume-red": "#FE5656",
    //   "costume-gray": "#333333"
    // },
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],


};

