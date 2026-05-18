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
        primary: "#34C759",
        teal: "#27C2C7",
        "primary-dark": "#1FA84A",
        aqua: "#6EDFE3",
        "dark-text": "#1F2D2F",
        "light-bg": "#F5F7F7",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
      fontSize: {
        "hero": ["clamp(2.5rem,5vw,4rem)", { lineHeight: "1.15", fontWeight: "700" }],
      },
    },
  },
  plugins: [],
};
export default config;
