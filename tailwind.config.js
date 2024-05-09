const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        coveredby: ["Covered By Your Grace"],
        manrope: ["manrope"],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
