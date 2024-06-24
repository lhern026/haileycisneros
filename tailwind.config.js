/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B6B", // Soft pink
        secondary: "#FFA600", // Vibrant orange
        accent: "#4DD0E1", // Light turquoise
        background: "#F0F0F0", // Light gray
        text: "#333", // Dark gray for text
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
