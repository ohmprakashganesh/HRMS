/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'serif','poppins'],
        poppins: ['Poppins', 'sans-serif'], // Adds Lora as a font option
      },
    },
  },
  plugins: [],
};
