/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF5',
          100: '#FAF4E3',
          200: '#F4E5BE',
          300: '#EDD495',
          400: '#E4BF68',
          500: '#D4AF37', // signature warm gold
          600: '#B89225',
          700: '#926F1A',
          800: '#6C4F13',
          900: '#46320C',
        },
        obsidian: {
          950: '#070605',
          900: '#0E0C0A',
          800: '#171412',
          700: '#221E1A',
          600: '#322C27',
        },
        cream: {
          50: '#FAF8F5',
          100: '#F5EFE6',
          200: '#EBE0D0',
          300: '#DECCB3',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
