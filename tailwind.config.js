/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },

      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(8px, -6px)" },
        },
        floatMid: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-10px, 6px)" },
        },
        floatFast: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(6px, 10px)" },
        },

        /** 🔔 Titreşim Animasyonu */
        shake: {
          "0%": { transform: "translate(0, 0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(2px, -2px)" },
          "60%": { transform: "translate(-2px, 1px)" },
          "80%": { transform: "translate(2px, 1px)" },
          "100%": { transform: "translate(0, 0)" },
        },

        /** 🔔 Fade Up */
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
            filter: "blur(4px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)",
          },
        },
      },

      animation: {
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "float-mid": "floatMid 5s ease-in-out infinite",
        "float-fast": "floatFast 4s ease-in-out infinite",
        "fade-up": "fadeUp 1.2s ease-out",

        /** 🔔 Titreşim */
        shake: "shake 0.35s ease-in-out",
        "shake-3s": "shake 0.35s ease-in-out 3s infinite",
      },
    },
  },
  plugins: [],
};
