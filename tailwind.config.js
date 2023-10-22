/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neutral: '#2e2d2d',
        darkSecondary: '#1c1c1c',
      },
    },
  },
  plugins: [],
}
