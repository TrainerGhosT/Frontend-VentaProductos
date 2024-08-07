/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // add this line
  ],
  theme: {
    extend: {
      fontFamily: { 
        roboto: ['Roboto', 'sans-serif'],
      }, 
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #00b09b, #ffff)',
      },
    },
  },
  plugins: [],
}