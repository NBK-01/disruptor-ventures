/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Main: ["Orbitron", "sans-serif"],
      Sub: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        "dv-green": "#92995C",
        "dv-dark": "#1E1E1E",
        "dv-white": "#d1d1d1",
        "dv-green-dark": "#30331f",
      },
    },
  },
  plugins: [],
};
