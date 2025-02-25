import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightgray: "#d9d9d9",
        darkgray: "#303030",
        darkgray2: "#554e50"
      },
      fontFamily: {
        sans: ['var(--font-inter)']
      },
    },
  },
  plugins: [],
} satisfies Config;
