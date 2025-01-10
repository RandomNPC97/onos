/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'footer_theme': '#bbbfc7',
        'primary_theme': 'rgb(255, 255, 255)',
        'primary_theme2': '#192235',
        'secondary_theme': '#111827',
        'secondary_theme2': 'rgb(139, 96, 237);',
        'text_theme': 'rgb(0, 0, 0);'
      }
    },
  },
  plugins: [],
}
