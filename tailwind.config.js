/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        cream: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
        },
        accent: {
          yellow: '#fde047',
          pink: '#f472b6',
          cyan: '#22d3ee',
          lime: '#a3e635',
          orange: '#fb923c',
          coral: '#f87171',
        },
      },
      boxShadow: {
        brutal: '6px 6px 0px 0px #1a1a1a',
        'brutal-lg': '10px 10px 0px 0px #1a1a1a',
        'brutal-sm': '4px 4px 0px 0px #1a1a1a',
        'brutal-purple': '6px 6px 0px 0px #581c87',
        'brutal-pink': '6px 6px 0px 0px #be185d',
        'brutal-cyan': '6px 6px 0px 0px #0e7490',
        'brutal-lime': '6px 6px 0px 0px #3f6212',
        'brutal-yellow': '6px 6px 0px 0px #a16207',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        'pop-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        float: 'float 4s ease-in-out infinite',
        wiggle: 'wiggle 0.5s ease-in-out',
        'pop-in': 'pop-in 0.4s ease-out',
      },
    },
  },
  plugins: [],
};
