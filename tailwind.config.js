/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#393939",
      },
      fontFamily: {
        volkorn: ["Vollkorn", "serif"],
        avanir: ["Montserrat", "sans-serif"],
        timesroman: ["EB Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
