/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line is crucial
  ],
  darkMode: 'class', // Make sure this is here for the theme toggle
  theme: {
    extend: {},
  },
  plugins: [],
}