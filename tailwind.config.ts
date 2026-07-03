import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: "#4F46E5",
          cyan: "#06B6D4",
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-kr)", "system-ui", "sans-serif"],
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        popIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        floaty: "floaty 2.6s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.5s ease-out both",
        "pop-in": "popIn 0.4s ease-out both",
      },
      boxShadow: {
        glow: "0 20px 45px -15px rgba(79, 70, 229, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
