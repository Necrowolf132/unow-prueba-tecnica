/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "unow-",
  content: [
    "./*.php",
    "./**/*.php",
    "./templates/**/*.php",
    "./assets/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        customTextHoverColor: "#475467",
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"], // Inter será la fuente principal para "sans".
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
