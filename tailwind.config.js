/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
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
          light: "#F4F6FF", // Tono más claro
          dark: "rgb(3 12 18)", // Tono más oscuro
        },

        lgnav: {
          DEFAULT: "#10375C",
        },

        btnNav: {
          default: " rgb(250 204 21 / var(--tw-text-opacity))",
          hover: "rgb(207 166 0)",
        },

        exph1: {
          default: "rgb(254 240 138 / var(--tw-text-opacity))",
        },

        techColors: {
          html: "#f16524",
          css: "rgb(33 103 179)",
          js: "rgb(250 204 21 / var(--tw-text-opacity))",
          react: "rgb(88 196 220)",
          twlcss: "rgb(56 189 248)",
          vite: "#ffd52d",
        },

        h1lg: {
          DEFAULT: "rgb(103 58 182)",
          hover: "rgb(79 37 153)",
        },
        blackBase: {
          DEFAULT: "#176B87",
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
        Sutittle: ["Press Start 2P", "system-ui"],
        second: ["Onest", "sans-serif"],
      },
    },
  },
  plugins: [],
}
