/**
 * Design Tokens — semantic color mapping (TRD #3).
 * Tokens are RGB triplets resolved via `rgb(var(--t-*) / <alpha-value>)`,
 * so `bg-primary/70`, `dark:bg-secondary` and every opacity modifier work.
 * `darkMode: 'class'` lets `src/lib/theme.js` pin the dark default.
 */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: 'rgb(var(--t-canvas) / <alpha-value>)',
        primary: 'rgb(var(--t-primary) / <alpha-value>)',
        secondary: 'rgb(var(--t-secondary) / <alpha-value>)',
        accent: 'rgb(var(--t-accent) / <alpha-value>)',
        muted: 'rgb(var(--t-muted) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
