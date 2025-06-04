/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",       // Direct reference to your HTML file
    "./src/**/*.{html,js}" // Any HTML/JS files in src/
  ],
  theme: {
    extend: {
      fontFamily: {
        mooli: ['Mooli', 'sans-serif'],
      },
    },
  },
  plugins: [],
}