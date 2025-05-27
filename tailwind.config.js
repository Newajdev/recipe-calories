/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Black60': '#150B2B99',
        'BaseTitle': '#150B2B',
        'Black5': '#150B2B1A',
        'Primary':'#0BE58A'
      }
    },
  },
  plugins: [],
}

