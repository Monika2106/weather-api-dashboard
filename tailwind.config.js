/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.html'],
  theme: {
    extend: {
      colors: {
        customPurple: '#583A9E', // Define a custom color
        customPink:'#F7EBEB'
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

