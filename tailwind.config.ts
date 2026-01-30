import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'stratosphere': {
          DEFAULT: '#007AFF',
          dark: '#0055CC',
          light: '#4DA3FF',
        },
        'ignition': {
          gold: '#FFD700',
          amber: '#F59E0B',
        },
        'navy': {
          DEFAULT: '#0F172A',
          light: '#1E293B',
          muted: '#64748B',
        },
      },
      fontFamily: {
        orbitron: ['var(--font-orbitron)', 'sans-serif'],
        dm: ['var(--font-dm-sans)', 'sans-serif'],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'exhaust': 'exhaust 0.5s ease-in-out infinite alternate',
        'ticker': 'ticker 30s linear infinite',
        'float-up': 'float-up 8s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'pulse-glow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.1)', opacity: '1' },
        },
        exhaust: {
          '0%': { height: '180px', opacity: '0.9' },
          '100%': { height: '220px', opacity: '1' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'float-up': {
          '0%': { transform: 'translateY(100vh) scale(0)', opacity: '0' },
          '10%': { opacity: '0.6' },
          '90%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-100px) scale(1)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
export default config
