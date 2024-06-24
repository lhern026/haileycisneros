/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: "#FFA600",
        accent: "#3A86FF",
        background: "#F7F9FB",
        text: "#333",
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
