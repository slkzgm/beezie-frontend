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
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        panel: "var(--color-panel)",
        foreground: "var(--color-foreground)",
        accent: {
          DEFAULT: "var(--color-accent)",
          subtle: "var(--color-accent-subtle)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        soft: "0 24px 64px rgba(4, 8, 18, 0.45)",
      },
    },
  },
  plugins: [],
};
export default config;
