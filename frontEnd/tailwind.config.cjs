/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lmd: "1056px",
      },
      colors: {
        achpurple: "#A04BEA",
        achblue: "#4D56E8",
        achpink: "#E84DB9",
        achred: "#E82A2A",
        achgold: "#EAAD18",
        maindarkpurple: "#1C003A",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
