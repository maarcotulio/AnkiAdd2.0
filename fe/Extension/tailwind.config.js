/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sail: {
          50: "#f0f9ff",
          100: "#e0f3fe",
          200: "#b3e5fc",
          300: "#7ed7fb",
          400: "#3ac1f6",
          500: "#10aae7",
          600: "#0488c5",
          700: "#056d9f",
          800: "#085c84",
          900: "#0d4d6d",
          950: "#093148",
        },
        DarkBackground: "#0E0E11",
        WhiteBackground: "#F0F0F3",
      },

      fontFamily: {
        libreBaskerville: ["LibreBaskerville"],
        robotoSlab: ["RobotoSlab"],
      },
    },
  },
  plugins: [],
};
