/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/common/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      tablet: '991.98px'
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xl: 'calc(1110px + 2rem)'
      }
    },
    fontFamily: {
      lexend: ['Lexend', 'sans-serif']
    },
    colors: {
      white: 'rgb(255, 255, 255)',
      yellow: 'rgb(255, 207, 85)',
      light: {
        gray: 'rgb(239, 239, 239)',
        green: 'rgb(234, 241, 235)',
        blue: 'rgb(239, 242, 248)'
      },
      invisible: {
        green: 'rgba(53, 151, 64, 0.8)'
      },
      primary: 'rgb(79, 160, 131)',
      warning: 'rgb(229, 92, 92)',
      brand: 'rgb(53, 151, 64)',
      text: {
        primary: 'rgb(31, 37, 51)',
        secondary: 'rgb(112, 115, 124)'
      }
    }
  },
  plugins: []
};
