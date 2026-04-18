import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef5ff",
          100: "#d9e9ff",
          200: "#bad8ff",
          300: "#8cc0ff",
          400: "#56a0ff",
          500: "#2c7cf2",
          600: "#1760d6",
          700: "#154eb0",
          800: "#17428f",
          900: "#183975",
          950: "#11244a"
        },
        slateish: "#0d1321",
        surface: "#f8fafc"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2, 6, 23, 0.08)"
      },
      maxWidth: {
        "8xl": "90rem"
      }
    },
  },
  plugins: [],
} satisfies Config;
