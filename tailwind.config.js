/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./app/*.js"],
  theme: {
    extend: {
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
    },
    screens: {
      sm: "300px",
      md: "576px",
      lg: "968px",
      xl: "1240px",
    },
  },
  plugins: [],
};
