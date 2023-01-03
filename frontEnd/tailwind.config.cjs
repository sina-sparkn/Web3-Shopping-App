/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx", "./src/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
