/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        gradientStart: "#213A57", // Color 1
        gradientMid1: "#0B6477", // Color 2
        gradientMid2: "#14919B", // Color 3
        gradientMid3: "#0AD1C8", // Color 4
        gradientMid4: "#45DFB1", // Color 5
        gradientEnd: "#80ED99", // Color 6
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
