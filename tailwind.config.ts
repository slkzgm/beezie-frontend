import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#131313",
        surface: {
          DEFAULT: "#1a1a1a",
          dark: "#232323",
          darker: "#2a2a2a",
        },
        border: {
          DEFAULT: "#3a3a3a",
          light: "rgba(255, 255, 255, 0.28)",
        },
        text: {
          primary: "#ffffff",
          secondary: "#7c7c7c",
          tertiary: "#b4b4b4",
        },
        accent: {
          gold: "#ffca28",
          "gold-start": "#ffb000",
          "gold-end": "#ffe082",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backdropBlur: {
        xs: "3.1px",
        xl: "250px",
      },
      boxShadow: {
        soft: "3px 20px 24px -4px rgba(3, 3, 3, 0.08), 0px 8px 8px -4px rgba(3, 3, 3, 0.03)",
        glow: "0px 0px 10px 0px rgba(255, 176, 0, 0.35)",
      },
      spacing: {
        "13": "3.25rem",
        "15": "3.75rem",
      },
    },
  },
  plugins: [],
};
export default config;
