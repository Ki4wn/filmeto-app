/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/frontend/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#7e3c37',
        'base-white': '#faf4f1',
      },
    },
    maxWidth: {
      container: '1666px', // Fixed max-width for the container
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
    },
    container: {
      center: true, // Optional: Centers the container
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '3rem',
      },
    },
  },
  plugins: [],
}

