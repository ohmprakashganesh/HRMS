/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'serif','poppins'],
        poppins: ['Poppins', 'sans-serif'], // Adds Lora as a font option
      },
      colors:{
        'custom-green': '#1ABC9C',
        'custom-yellow':'#fffbce',
        'light-maroon':'#f2e6e6',
        'light-green':'#eef2e4'
      },
    },
  },
  plugins: [],
};
