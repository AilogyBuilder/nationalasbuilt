import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef2f9",
          100: "#d0dcf0",
          200: "#a2b9e1",
          300: "#6d8fcb",
          400: "#3d69b5",
          500: "#1e4d9b",
          600: "#163b7a",
          700: "#0f2a58",
          800: "#091c3d",
          900: "#040e1f",
        },
        steel: {
          50: "#f4f6f9",
          100: "#e2e7ef",
          200: "#c5cede",
          300: "#9aaac0",
          400: "#6d84a0",
          500: "#4d6382",
          600: "#3a4d66",
          700: "#28374a",
          800: "#18222e",
          900: "#0c1118",
        },
        silver: {
          50: "#f8f9fb",
          100: "#edf0f5",
          200: "#d8dde8",
          300: "#b8c0d0",
          400: "#8e9bb0",
          500: "#697a92",
          600: "#4f5d72",
          700: "#374152",
          800: "#222b37",
          900: "#111720",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};
export default config;
