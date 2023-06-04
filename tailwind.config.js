/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '375px',    // Small screens and above
        'md': '412px',    // Medium screens and above
        'lg': '768px',   // Large screens and above
        'xl': '1024px',   // Extra-large screens and above
      },
      fontWeight: {
        'normal': 400,
      },
      textTransform: {
        'all-caps': 'uppercase',
      },
      fontSize: {
        'h1': '72px',
        'h2': '56px',
        'h3': '40px',
        'h4': '24px',
        'LABEL': '12px',
        'text_big': '20px',
        'text': '16px',
        'text_small': '14px',
      },
      colors: {
        primary: '#072329',
        secondary: '#E8231A',
        accent: '#f4f2ef',
      },
    },
  },
  plugins: [],
}