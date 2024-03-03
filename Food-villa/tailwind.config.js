/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      "kode-mono": ['"Kodo Mono"', "sans-serif"],
      body: ["Open Sans", "sans-serif"],
      garamond: ['"EB Garamond"', "serif"],
      lora: ["Lora", "serif"],
      Namdhinggo: ["Namdhinggo", "serif"],
      Gothic: ["Nanum Gothic", "serif"],
      Kalnia: ["Kalnia", "serif"],
      Merienda: ["Merienda", "cursive"],
      "protest-guerrilla": ["Protest Guerrilla", "sans-serif"],
      Comfortaa: ["Comfortaa", "serif"],
      Rubik: ["Rubik Doodle Shadow", "serif"],
      RubikM: ["Rubik Moonrocks", 'serif'],
      RubikWet: ["Rubik Wet Paint", 'serif'],
      'protest-rev' : ["Protest Revolution", 'serif']
    },
    extend: {
      backgroundImage: {
        'indian-1': "url('https://imgur.com/0YUR7Hu.png')",
        'indian-2': "url('')",
      }
    },
  },
  plugins: [],
}

