/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-view': 'url(./assets/pattern-bg-desktop.png)',
        'mobile-view': 'url(./assets/pattern-bg-mobile.png)'
      },
      fontFamily: {
        'Rubik': ['Rubik', 'sans-serif']
      },
      screens: {
        'xs': '300px',
      },
    },
  },
  plugins: [],
}