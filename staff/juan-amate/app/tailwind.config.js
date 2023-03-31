/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['"Quicksand"'],
        'spline': ['"Spline Sans"'],
      }
    },
  },
  plugins: [],
}
