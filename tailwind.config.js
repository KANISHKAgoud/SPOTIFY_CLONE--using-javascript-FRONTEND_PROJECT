/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Spotify-Regular': ['SpotifyMixUI-Regular', 'sans-serif'],
        'Spotify-bold': ['SpotifyMixUI-bold', 'sans-serif']
      },
    },
  },
  plugins: [],
}



