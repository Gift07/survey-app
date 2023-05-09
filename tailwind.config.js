/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { major: ["Montserrat", "sans-serif"] },
      colors: { blue: "#206bd9", blac: "#212121" },
      height: { "calc-vh": "calc(100vh - 56px)" },
    },
  },
  plugins: [],
};
