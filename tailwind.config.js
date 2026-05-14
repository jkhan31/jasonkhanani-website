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
        hankoRust: '#C73E1D',
        rustAccent85: '#DF5A3A',
        rustAccent70: '#E67C56',
        sageBridge: '#5A7A6F',
        sageBridge85: '#6B9084',
        sageBridge70: '#7CA799',
        warmSand: '#F4E8D8',
        lightStone: '#E8DFD3',
        duskBlue: '#2B3E4D',
        duskBlue85: '#3F5568',
        duskBlue70: '#576B7E',
      },
      fontFamily: {
        serif: ['"Archivo"', 'sans-serif'],
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
