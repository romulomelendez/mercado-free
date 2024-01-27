/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-yellow": "#FFF159",
        "dark-yellow": "#736c28",
        "light-gray": "#ebebeb"
      }
    },
  },
  plugins: [],
}

