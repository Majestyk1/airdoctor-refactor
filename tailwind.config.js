/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem', // 16px (same as px-4)
        sm: '2rem',      // 32px on small screens and up
        lg: '2rem',      // 32px on large screens and up
        xl: '2rem',      // 32px on xl screens and up
        '2xl': '2rem',   // 32px on 2xl screens and up
      },
    },
  },
  plugins: [],
};