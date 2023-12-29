/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    extend: {
      colors: {
        primary: "#ffc0cb",
        secondary: "#8B6464",
        dark: "#2A0F15",
      },
      screens: {
        "2xl": "1280px",
      },
    },
  },
  plugins: [],
};
