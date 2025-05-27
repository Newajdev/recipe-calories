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
        'Black80': '#150B2BCC',
        'BaseTitle': '#150B2B',
        'Black5': '#150B2B1A',
        'Primary':'#0BE58A'
      },
      backgroundImage:{
        'hero-image': "url('./public/HeroBanner.png')"
      },
      fontSize:{
        'SubTitle':'40px'
      }
    },
  },
  plugins: [],
}

