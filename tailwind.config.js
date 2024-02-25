/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dots-texture': "url('/dots_texture.png')",
        'blue-dots-texture': "url('/blue_dots_texture.png')"
      },
      dropShadow: {
        'sm-bold': '0 5px 3px rgba(0, 0, 0, 0.50)'
      }
    },
  },
  plugins: [],
}