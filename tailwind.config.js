/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cobalt: {
          DEFAULT: '#2F43FC',
          dark: '#1D2DB5',
          light: '#4C60FF',
        },
        acid: {
          DEFAULT: '#D9E32A',
          hover: '#C2CB24',
          glow: 'rgba(217, 227, 42, 0.4)',
        },
        deepBlack: '#0A0A0A',
        paperWhite: '#F5F3E8',
        signalCyan: '#00E5FF',
        staticGrey: '#8C8C8C',
        tvBezel: '#18181B',
        tvPlastic: '#27272A',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        vt: ['"VT323"', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
        archivo: ['"Archivo Black"', 'sans-serif'],
      },
      boxShadow: {
        'crt-glow': '0 0 25px rgba(217, 227, 42, 0.35)',
        'cyan-glow': '0 0 15px rgba(0, 229, 255, 0.45)',
        'cobalt-glow': '0 0 30px rgba(47, 67, 252, 0.6)',
        'pixel': '4px 4px 0px #0A0A0A',
        'pixel-sm': '2px 2px 0px #0A0A0A',
        'pixel-acid': '4px 4px 0px #D9E32A',
      },
      animation: {
        'flicker': 'crtFlicker 0.15s infinite',
        'scanline': 'scanlineMove 8s linear infinite',
        'float-slow': 'floating 4s ease-in-out infinite',
        'float-reverse': 'floatingRev 5s ease-in-out infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        crtFlicker: {
          '0%': { opacity: '0.98' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0.97' },
        },
        scanlineMove: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatingRev: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(8px)' },
        },
      }
    },
  },
  plugins: [],
}

