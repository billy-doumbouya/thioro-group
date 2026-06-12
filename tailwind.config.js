/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Charte graphique Thioro Group
        bleu: {
          electrique: "#0054A6",
          eau: "#00AEEF",
          fonce: "#003d7a",
          clair: "#e6f4fd",
        },
        gris: {
          anthracite: "#555555",
          clair: "#f5f5f5",
          moyen: "#888888",
        },
        primary: {
          DEFAULT: "#0054A6",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#00AEEF",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#e6f4fd",
          foreground: "#0054A6",
        },
        background: "#ffffff",
        foreground: "#1a1a1a",
        muted: {
          DEFAULT: "#f5f5f5",
          foreground: "#888888",
        },
        border: "#e2e8f0",
        card: {
          DEFAULT: "#ffffff",
          foreground: "#1a1a1a",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-in-right": "slideInRight 0.3s ease-out",
        "count-up": "countUp 1s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
