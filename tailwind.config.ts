import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: "#f0f8f7",
          100: "#def0ee",
          200: "#bde1de",
          300: "#8ec9c4",
          400: "#53aba4",
          500: "#1f8d86",
          600: "#18746f",
          700: "#12625f",
          800: "#0e4b4a",
          900: "#073a38",
          950: "#052e2d",
        },
        gold: {
          DEFAULT: "#f2b01e",
          light: "#ffd66b",
          dark: "#ae7700",
          50: "#fffbf0",
          100: "#fff4dc",
        },
        brand: {
          ink: "#172326",
          muted: "#6f7e80",
          line: "#e4ebea",
          bg: "#f7f9f8",
          card: "#ffffff",
          green: "#23a66a",
          red: "#e55e5e",
          blue: "#4c8ed8",
          violet: "#7a6bd1",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        sora: ["var(--font-sora)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(8,51,49,0.06)",
        card: "0 20px 50px rgba(8,51,49,0.08)",
        glow: "0 30px 80px rgba(8,51,49,0.14)",
        "glow-gold": "0 15px 35px rgba(242,176,30,0.20)",
        "glow-teal": "0 20px 45px rgba(18,98,95,0.25)",
      },
      borderRadius: {
        "2xl": "20px",
        "3xl": "26px",
        "4xl": "32px",
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "float-delayed": "float 5s ease-in-out 1.5s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
