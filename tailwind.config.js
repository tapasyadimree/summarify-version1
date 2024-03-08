//basic configuration of tailwind using vite

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //fonts i am going to be using
      fontFamily: {
        satoshi: ["Satoshi" , "sans-serif"],
        inter: ["inter" , "sans-serif"],
      }
    },
  },
  plugins: [],
}

