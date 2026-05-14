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
        sageBridge: '#5A7A6F',
        // Palette 1: Diagnostic Blue + Warm Amber
        pageBg: '#F5F5F5',
        cardBg: '#FFFFFF',
        diagnosticBlue: '#1E3A5F',
        warmAmber: '#C97817',
        softTeal: '#2E8B8B',
        darkText: '#2C2C2C',
        bodyText: '#5A5550',
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
