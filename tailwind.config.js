/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: 'DM Sans'
    },
    extend: {
      colors: {
        primary: '#212121',
        secondary: '#282828',
        white: '#eeffff',
        red: '#e34e41',
        green: '#a9e88d'
      }
    },
  },
  plugins: [],
}
