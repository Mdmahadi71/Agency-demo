/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true,
      padding:{
        DEFAULT:"15px",
        sm: "30px",
        lg: "60px",
        xl: "75px",
        "2xl": "96px",
      }
    },
    fontFamily: {
      'Dm-sans': ['DM Sans', 'sans-serif'],
      'Nunito': ['Nunito', 'sans-serif'],

    },
    extend: {
      colors: {
        'Agency-blu': '#3661FC',
        'Agency-liniar': '#FE651B',
        'Agency-menu': '#FE681E',
        'Agency-Banner': '#6B6161',
        'Agency-deve': '#CCCCCC',

      },
    },
  },
  plugins: [],
}

