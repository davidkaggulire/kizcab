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
        darkBlueGray: '#172F39',
        lightBlueGray: '#1C3E4A',
        darkYellow: '#F29B3A'
      },
    },
  },
  plugins: [],
} satisfies Config;
