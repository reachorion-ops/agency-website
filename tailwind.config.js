/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1D1D1F',
          surface: '#F5F5F7',
          border: '#D9D9D9',
          blue: '#0071E3',
          teal: '#0F766E',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: [
          '"Nunito Sans"',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif'
        ],
        headline: [
          '"Plus Jakarta Sans"',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif'
        ],
        serif: [
          'Bitter',
          'Georgia',
          'serif'
        ],
        mono: [
          '"JetBrains Mono"',
          'SF Mono',
          'ui-monospace',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace'
        ]
      },
      letterSpacing: {
        headline: '0.8px',
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.15em',
        ultra: '0.25em',
      }
    },
  },
  plugins: [],
}

