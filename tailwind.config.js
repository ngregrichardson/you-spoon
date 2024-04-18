import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        border: 'hsl(var(--border))',
        accent: 'hsl(var(--accent))',
        destructive: 'hsl(var(--destructive))'
      }
    },
    keyframes: {
      'hue-rotate': {
        '0%': {
          filter: 'hue-rotate(0deg)'
        },
        '100%': {
          filter: 'hue-rotate(360deg)'
        }
      }
    },
    animation: {
      hueRotate: 'hue-rotate 1s linear infinite'
    },
    screens: {
      xs: '475px',
      ...defaultTheme.screens
    }
  },
  plugins: []
}
