import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Your JustFix Pro brand colors
        primary: {
          DEFAULT: "#0066B3", // Blue
          foreground: "white",
        },
        secondary: {
          DEFAULT: "#FF6B00", // Orange
          foreground: "white",
        },
        accent: {
          DEFAULT: "#FFD100", // Yellow
          foreground: "black",
        },
        background: "#FFFFFF",
        foreground: "#000000",
        // You can add more custom colors here
        justfix: {
          blue: "#0066B3",
          orange: "#FF6B00",
          yellow: "#FFD100",
          darkblue: "#004680",
          lightblue: "#3399FF",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config; 