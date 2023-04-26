/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        primary: '#FFF7EE',
        secondary: '#FA8000'
      },
      dropShadow:{
        custom: '4px 4px 0px #000',
        hover:'5px 5px 0px  #000'
      },
      backgroundColor:{
        card:"rgba(255, 255, 255, 0.2)"
      },
    },
    fontFamily: {
      body:['Inter']
    },
  },
  plugins: [],
}