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
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.80) 0%, rgba(147, 147, 147, 0.00) 39.81%, rgba(74, 74, 74, 0.00) 69.9%, #000 100%), url('/Images/Rectangle.png')",
      },
    },
  },

  plugins: [],
} satisfies Config;
