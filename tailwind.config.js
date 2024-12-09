/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": {opacity: 0, transform: "translateY(-10px)"},
          "100%": {opacity: 1, transform: "translateY(0)"},
        },
      },
      colors: {
        primary: {
          DEFAULT: "#041C32", // Color principal
          light: "#04293A", // Tono más claro
          dark: "#064663", // Tono más oscuro
        },
        primary_hover: {
          DEFAULT: "#052443",
        },
        h1Color: {
          default: "#2563eb",
        },
        accent: {
          DEFAULT: "#ECB365", // Color de acento
        },
        textTitle: {
          default: "rgba(0, 0, 0, 0.9) ",
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Oleo Script", "system-ui"],
      },
    },
  },
  plugins: [],
}
