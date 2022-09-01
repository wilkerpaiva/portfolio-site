/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxsm: '340px',
      xsm: '390px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': '#ffffff',
      'dark': '#181818',
      'gray': '#868686',
      'black': '#000000',
      'about-color': '#7948E1',
      'about-color-hover': '#5C27CE'
    },
    fontFamily: {
      'sans': ['Rubik', 'Roboto', 'Lato', 'sans-serif'],
    },
    fontSize: {
      '10xl': '10rem',
      '3xl': '1.875rem',
      'sm': '0.875rem',
      '9xl': '8rem',
    },
    extend: {
      animation: {
        marquee: 'marquee 60s linear infinite',
        marquee2: 'marquee2 60s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}
