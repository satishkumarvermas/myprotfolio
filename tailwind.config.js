/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F8F9FA',
        secondary: '#FFFFFF',
        accent: '#007BFF',
        'secondary-accent': '#63B3ED',
        text: '#212529',
        'text-secondary': '#6C757D',
      },
      fontFamily: {
        main: ['Inter', 'sans-serif'],
        heading: ['Gendy', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
