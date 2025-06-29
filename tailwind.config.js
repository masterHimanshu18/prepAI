/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0052A5',  // You can customize these colors
          light: '#0066CC',
          dark: '#003D7A',
        },
        secondary: {
          DEFAULT: '#FFD700',
          light: '#FFE44D',
          dark: '#CCB100',
        },
      },
    },
  },
  plugins: [],
}