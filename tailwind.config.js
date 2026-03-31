/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef1fa',
          100: '#e0e5f6',
          200: '#c6d1ed',
          300: '#a1b4e0',
          400: '#7591cd',
          500: '#5272ba',
          600: '#2B4FCB',
          700: '#2240a6',
          800: '#1d3587',
          900: '#192d6e',
        }
      }
    },
  },
  plugins: [],
};
