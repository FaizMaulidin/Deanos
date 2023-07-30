/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'ele': "url('./assets/ele.jpg')",
        'jew': "url('./assets/jew.jpg')",
        'men': "url('./assets/men.jpg')",
        'wom': "url('./assets/wom.jpg')",
        'look-good': "url('./assets/look-good.jpg')",
        'gadget': "url('./assets/gadget.jpg')"
      },
      colors: {
        'tok-green': '#41b549',
        'footer': '#33292c',
        'inactive': '#c8c8cf'
      },
      backgroundSize: {
        '160%': '140%',
        '145%': '132%',
        '100%': '100%',
        '110%': '110%'
      },
      boxShadow: {
        'cards': '0 -2px 6px 3px rgba(0, 0, 0, 0.1)',
        'card-wrapper': "inset 0 0px 6px 3px rgba(0, 0, 0, 0.1)",
        'full-popup': '0 0px 200vh 200vh rgba(0, 0, 0, 1)'
      },
      borderWidth: {
        '3': '3px'
      },
    },
    fontFamily: {
      sans: ['Titillium Web', 'sans-serif'],
      cursive: ["Tektur", "cursive"]
    },
  },
  plugins: [],
}

