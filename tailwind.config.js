/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        foreground: '#FFFFFF',
        accentStart: '#0070F3',
        accentEnd: '#00D9FF',
        neon: '#00FF88',
        grayDark: '#333333',
        grayLight: '#666666',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(to right, #0070F3, #00D9FF)',
      },
    },
  },
  plugins: [],
}
