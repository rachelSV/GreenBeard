/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'main-bg': "url('/GreenBeard/assets/images/background_full_R.webp')"
        'main-bg': "url('/assets/images/background_full_R.webp')"
      },
      fontFamily: {
        title: ['"Playfair Display"', 'serif'],
        body: ['"Quicksand"', 'sans-serif'],
      },
      colors: {
            transparent: 'transparent',
            white: '#ffffff',
            black: '#19152A',
            primary: '#14532d',
            secondary: '#ec4899',
            darkblue: '#19152A',
            gray: {
                DEFAULT: '#7780A1',
                dark: '#1C2331',
            },
        },
    },
  },
  plugins: [],
}