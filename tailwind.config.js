/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      Main: ["Orbitron", "sans-serif"],
      Sub: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        "dv-green": "#2D9F6C",
        "dv-dark": "#1E1E1E",
        "dv-white": "#d1d1d1",
        "dv-green-dark": "#0D3020",
      },
    },
  },
  plugins: [],
};
