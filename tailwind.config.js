/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      'primary':'#00668A',
      'secendary':'#004E71',
    },
    fontFamily:{
      Roboto:['Roboto,sans-serif'],
    },
    container:{
      padding:'2rm',
      center:true,
    },
    screens:{
      sm:'640px',
      ms:'768px',
    },
  },
  plugins: [],
}

