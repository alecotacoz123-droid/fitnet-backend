// fitnet-frontend/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F0F0F",
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#00FF88",
          foreground: "#0F0F0F",
        },
        card: "#1E1E1E",
        "card-foreground": "#FFFFFF",
        secondary: "#1E1E1E",
        "secondary-foreground": "#FFFFFF",
        muted: "#2A2A2A",
        "muted-foreground": "#A0A0A0",
        destructive: "#FF4444",
        "destructive-foreground": "#FFFFFF",
        border: "rgba(255, 255, 255, 0.1)",
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.625rem",
        sm: "0.5rem",
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
}