module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': 'Inter',
      },
      animation: {
        'bounce': 'bounce 3s linear 2',
      }
    },
  },
  plugins: [],
}