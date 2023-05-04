/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        permarker: ['var(--font-perm-marker)'],
        roboto: ['var(--font-roboto)'],
      },
    },
  },
  plugins: [],
}