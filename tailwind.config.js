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
        // Teal & Cream palette
        bg: '#faf7f2',
        bg2: '#f0ebe0',
        bg3: '#e8e2d4',
        ink: '#1c1c18',
        ink2: '#3e3c36',
        mut: '#8a8478',
        acc: '#007a5c',
        acc2: '#005c44',
        accl: '#c8e8de',
        acct: '#e4f4ef',
        accd: '#003d2e',
        bdr: 'rgba(0,0,0,0.08)',
        // Legacy tokens (for backwards compatibility during transition)
        ricePaper: '#faf7f2',
        sumiInk: '#1c1c18',
        hankoRust: '#007a5c',
        foxOrange: '#007a5c',
      },
      fontFamily: {
        serif: ['Lora', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
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
