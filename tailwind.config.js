const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': "#000000",
      'white': "#fff",
      'lightGreen': "#2F9633",
      'darkGreen': "#164F18",
      'lightBlack': "rgba(43, 43, 43, 0.75)",
      'boulder': "#7A7A7A"
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}