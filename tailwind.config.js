/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "url('/assets/images/background_full.png')"
      },
      fontFamily: {
      title: ['"Playfair Display"', 'serif'],
      body: ['"Quicksand"', 'sans-serif'],
    },
    },
  },
  plugins: [],
}