/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      height:{
        10:"50px"        
      }, 
      inset:{
        '1/40':'30%'
      }     
    },
  },
  plugins: [],
}

