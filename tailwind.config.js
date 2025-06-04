/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'glacial': ['Glacial Indifference', 'sans-serif'],
      },
      colors: {
        'kjorn': {
          'white': '#FFFFFF',
          'black': '#1A1A1A',
          'grey-100': '#F5F5F5',
          'grey-200': '#E5E5E5',
          'grey-300': '#D4D4D4',
          'grey-400': '#A3A3A3',
          'grey-500': '#737373',
          'grey-600': '#525252',
          'grey-700': '#404040',
          'grey-800': '#262626',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'carousel': 'carousel 20s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        carousel: {
          '0%, 20%': { opacity: '1' },
          '25%, 95%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 