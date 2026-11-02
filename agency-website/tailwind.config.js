/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          950: '#060911',
          900: '#0B0F19', // deep signature navy
          850: '#0F1523',
          800: '#141C30',
          700: '#1E2945',
          600: '#2A3B61',
        },
        neon: {
          purple: '#A855F7',
          violet: '#8B5CF6',
          indigo: '#6366F1',
          cyan: '#06B6D4',
          sky: '#38BDF8',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
