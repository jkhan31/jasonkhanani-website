module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ricePaper: '#FAF5F0',
        sumiInk: '#1A1A1A',
        hankoRust: '#802B0A',
        foxOrange: '#F07F2E',
        sage: '#4D6B57',
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        signature: ['Caveat', 'cursive'],
      },
      borderWidth: {
        '0.5': '0.5px',
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
