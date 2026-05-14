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
        // Warm Earthy Palette
        creamBg: '#FBF9F4',           // Warm cream background (replaces ricePaper)
        warmBrown: '#5A4A40',         // Primary text (replaces sumiInk)
        warmBrown80: '#6F5F55',       // Lighter warm brown
        warmBrown60: '#8B7A6F',       // Secondary text (warm taupe)
        warmBrown40: '#B5A499',       // Tertiary/muted text
        warmBrown20: '#D4C5BA',       // Light borders

        ochreAccent: '#B8654C',       // Primary CTA (warm rust-brown)
        ochreAccent85: '#D4845A',     // Hover state
        ochreAccent70: '#E5A577',     // Lighter accent

        goldenSand: '#C89D6E',        // Secondary accent (golden ochre)
        goldenSand85: '#D9AE7F',      // Hover
        goldenSand70: '#E8BF91',      // Light variant

        chocolateBrown: '#483936',    // Dark emphasis (headers, strong text)
        warmStone: '#F5EFE7',         // Section background (warm stone)
        lightStone: '#EBE3D8',        // Alternate section background

        // Legacy names for compatibility (map to new palette)
        ricePaper: '#FBF9F4',
        sumiInk: '#5A4A40',
        hankoRust: '#B8654C',
        sageBridge: '#C89D6E',
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
