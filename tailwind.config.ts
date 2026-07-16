import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1360px",
      },
    },
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FAF6EC",
          dim: "#F3EDDF",
        },
        ink: {
          DEFAULT: "#1E2A33",
          soft: "#2B3A44",
        },
        olive: {
          DEFAULT: "#6C7250",
          light: "#8B916C",
          dark: "#4F5439",
        },
        terracotta: {
          DEFAULT: "#BE6239",
          light: "#D68A5F",
          dark: "#95492A",
        },
        stone: {
          DEFAULT: "#9A9280",
          light: "#C9C3B5",
          dark: "#716B5D",
        },
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7vw, 7rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4.75rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 3.5vw, 3.25rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        prose: "62ch",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(30, 42, 51, 0.25)",
        card: "0 10px 30px -10px rgba(30, 42, 51, 0.15)",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
