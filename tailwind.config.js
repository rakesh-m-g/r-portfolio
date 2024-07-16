/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "760px",
      lg: "960px",
      xl: "1200px",
    },

    fontFamily: {
      primary: ["Sofadi One", "sans-serif"],
      sofadi: ["Sofadi One", "sans-serif"],
      secondary: ["Roboto Mono", " monospacesans-serif"],
    },
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "100%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "transparent",
          },
        },
      },
      animation: {
        typing: "typing 5s steps(100) infinite alternate, blink .1s infinite",
      },

      colors: {
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#5AD4EA",
          hover: "#21b2cb",
        },
      },

      // keyframes: {
      //   "accordion-down": {
      //     from: { height: "0" },
      //     to: { height: "var(--radix-accordion-content-height)" },
      //   },
      //   "accordion-up": {
      //     from: { height: "var(--radix-accordion-content-height)" },
      //     to: { height: "0" },
      //   },
      // },
      // animation: {
      //   "accordion-down": "accordion-down 0.2s ease-out",
      //   "accordion-up": "accordion-up 0.2s ease-out",
      // },
    },
  },
  plugins: [],

  plugins: [require("tailwindcss-animate")],
};
