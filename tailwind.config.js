/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./app/*.js"],
  theme: {
    extend: {},
    screens: {
      sm: "300px",
      md: "576px",
      lg: "768px",
      xl: "1240px",
    },
  },
  plugins: [],
};
