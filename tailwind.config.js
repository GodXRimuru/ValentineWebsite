/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'pink-dreamy': '#ffc0e0',
        'pink-soft': '#ffd6e8',
        'pink-pastel': '#ffe4f0',
        'rose-light': '#ffb3d9',
      },
    },
  },
  plugins: [],
}
