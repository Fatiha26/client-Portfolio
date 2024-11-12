/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 
        {
          200: "#EEF8FF",
          300: "#bfdffe",
          400: "#3498DB",
          500: "#0946EE",
          600: "#050C9C"
        },  
        secondary: {
          200: "#D1CDCD",
          300: "#ACA0A0",
          400: "#595959",
          500: "#E5E5E5",
         
        },
        success: {
          400: "#2ECC71"
        }, 
        error: {
          400: "#F22E24"
        },   
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'lato': ['Lato'],
        'garamond': ['Garamond']
    },
    },
  },
  plugins: [],
}