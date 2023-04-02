/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        guitarras: "url('/src/assets/images/guitarras.avif')",
        bateria: "url('/src/assets/images/bateria-2.jpg')",
        estudio: "url('/src/assets/images/estudio-minified.jpg')",
        "about-1": "url('/src/assets/images/fondo-about1.jpg')",
        "about-2": "url('/src/assets/images/fondo-about2.avif')",
        "guitarras-2": "url('/src/assets/images/guitarras-2.avif')",
      },
    },
  },
  plugins: [],
};
