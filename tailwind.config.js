/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Neon: ["Monaspace Neon Semibold"],
      },
      colors: {
        cBlack: "#011627",
        cWhite: "#F6F7F8",
        cGreen: "#2EC4B6",
        cRed: "#FF3366",
        cblue: "#20A4F3",
      },
    },
  },
  darkMode: "class",
  plugins: [require("tailwindcss-animated")],
};
