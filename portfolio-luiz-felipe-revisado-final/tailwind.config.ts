import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
        display: ['Arial Black', 'Inter', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
