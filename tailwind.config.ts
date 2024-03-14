import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      colors: {
        'main-blue': '#2596be',
        'main-yellow': '#ffde59',
        'main-green': '#0494b4',
        'main-turquoise': '#155263',
        'button-text': '#3490de',
        'button-hover-text': '#364f6b',
        black: '#34495e',
        white: '#ffffdf',
        'main-orange': '#ff6f3c',
        //background waves
        'wave-one': '#e5f6c6',
        'wave-two': '#abd4c1',
        'wave-three': '#f1d6ab',
      },
    },
  },
  plugins: [],
};
export default config;
