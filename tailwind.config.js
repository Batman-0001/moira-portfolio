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
        // Barbie Land palette
        barbie: {
          lavender:  '#CDB4DA', // soft lavender
          bubblegum: '#FFC8DC', // bubblegum pink
          pastel:    '#FFAFCC', // pastel pink
          hot:       '#E55E99', // hot pink (primary)
          mauve:     '#EBB9DF', // muted mauve
        },
        // keep a neutral
        ink:   '#1a1a1a',
        cream: '#FFF5F9',
      },
      boxShadow: {
        brutal:         '6px 6px 0px 0px #1a1a1a',
        'brutal-lg':    '10px 10px 0px 0px #1a1a1a',
        'brutal-sm':    '4px 4px 0px 0px #1a1a1a',
        'brutal-hot':   '6px 6px 0px 0px #c0426e',
        'brutal-lav':   '6px 6px 0px 0px #9a7fb5',
        'brutal-mauve': '6px 6px 0px 0px #b87aad',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        'pop-in': {
          '0%':   { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)',   opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        float:   'float 4s ease-in-out infinite',
        'pop-in': 'pop-in 0.4s ease-out',
      },
    },
  },
  plugins: [],
};
