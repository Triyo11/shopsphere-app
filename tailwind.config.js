/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif']
      }
    },
    colors: {
      color: {
        primary: '#FF4B92',
        secondary: '#9E0068',
        accent1: '#FFF6D6',
        accent2: '#FF0065',
        light: '#FFFFFF',
        dark: '#240E1F'
      }
    }
  },
  plugins: [],
}

