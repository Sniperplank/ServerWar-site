/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... } 

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      keyframes: {
        navHover: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        'nav-button-hover': 'navHover 1s linear forwards',
      },
    },
  },
  plugins: [],
}
