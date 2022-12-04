/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      "small": "768px",
      "medium": "1366px",
      "large": "1920px"
      // 0px 16px 0px #020D291F
    },
    extend: {
      boxShadow: {
        "header-light": "0px 0px 16px 0px rgba(2, 13, 41, 0.12)"
      }
    },
  },
  plugins: [],
}
