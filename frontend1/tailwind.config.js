/** @type {import('tailwindcss').Config} */
const daisyui = require('daisyui');

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
}

