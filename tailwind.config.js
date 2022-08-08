/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#212121',
        secondary: '#282828',
        ptext: '#eeffff',
        stext: '#e34e41'
      }
    },
  },
  plugins: [],
}
