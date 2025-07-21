/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "url('assets/images/background_full_R.webp')"
      },
      fontFamily: {
      title: ['"Playfair Display"', 'serif'],
      body: ['"Quicksand"', 'sans-serif'],
    },
    },
  },
  plugins: [],
}