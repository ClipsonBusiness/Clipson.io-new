/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'clipson-green': '#10B981',
        'clipson-green-dark': '#059669',
        'clipson-green-light': '#34D399',
      },
    },
  },
  plugins: [],
}

