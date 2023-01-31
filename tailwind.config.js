/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      white: "#ffffff",
      red: "#fc4747",
      "dark-blue": "#10141e",
      "semi-dark-blue": "#161d2f",
      "gray-blue": "#5a698f",
    },
    fontSize: {
      "heading-lg": "2rem",
      "heading-md": "1.5rem",
      "heading-sm": "1.5rem",
      "heading-xs": "1.125rem",
      "body-md": "0.9375rem",
      "body-sm": "0.8125rem",
    },
    extend: {},
  },
  plugins: [],
};
