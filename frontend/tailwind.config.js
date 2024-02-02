/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5B483D",
        orange: "#e5930f",
        noir: "#000000",
        blanc: "#FFFFFF",
        rouge: "#ff0000",
        bleu: "#2200e5",
        gris: "#757575",
        maron: "#ecd0d0e8",
        bluq: "#072967",
      },
      fontFamily: {
        marcellusSerif: ["Marcellus SC", "serif"],
      },
    },
  },
  plugins: [],
};
