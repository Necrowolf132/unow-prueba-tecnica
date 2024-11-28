/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.php",
    "./**/*.php",
    "./template-parts/**/*.php",
    "./assets/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "sans-serif"], // Inter será la fuente principal para "sans".
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
