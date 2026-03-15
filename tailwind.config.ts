import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#dc2626",
        "primary-light": "#ef4444",
        secondary: "#374151",
        "secondary-light": "#4b5563",
      },
    },
  },
  plugins: [],
};

export default config;
