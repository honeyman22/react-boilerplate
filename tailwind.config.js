/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", " sans-serif"],
      },
      colors: {
        primary: "#FF7500",
        primary_text: "#586A84",
      },
    },
  },
  plugins: [],
};
