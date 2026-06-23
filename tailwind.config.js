/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
    extend: {
      colors: {
        primary: {
          50: "#E6F7F6",
          100: "#CCF0ED",
          200: "#99E1DB",
          300: "#66D2C9",
          400: "#33C3B7",
          500: "#0D9488",
          600: "#0A7669",
          700: "#085952",
          800: "#053B3B",
          900: "#031E1E",
        },
        accent: {
          50: "#FEF3E2",
          100: "#FDE7C5",
          200: "#FBCF8B",
          300: "#F9B751",
          400: "#F79F17",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
        warm: {
          50: "#FAFAF9",
          100: "#F5F5F4",
          200: "#E7E5E4",
          300: "#D6D3D1",
          400: "#A8A29E",
          500: "#78716C",
        },
        ink: {
          50: "#F5F5F5",
          100: "#E0E0E0",
          200: "#B0B0B0",
          300: "#808080",
          400: "#505050",
          500: "#2D2D2D",
          600: "#242424",
          700: "#1A1A1A",
          800: "#111111",
          900: "#080808",
        },
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', '"Source Han Sans SC"', "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "count-up": "countUp 2s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
