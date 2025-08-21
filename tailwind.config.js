module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in the src directory
  ],
  theme: {
    extend: {
      transitionDuration: {
        500: "500ms",
        1000: "1000ms",
      },
      zIndex: {
        1000: "1000",
      },
      screens: {
        custom1: "768px", // iPad Mini and mobile
        custom: "850px", // iPad Air and slightly larger devices
        customFooter: "970px", // Custom for other needs
        // iPad Mini
        "ipad-mini-portrait": {
          raw: "(width: 768px) and (resolution: 163dpi)",
        },
        "ipad-mini-landscape": {
          raw: "(width: 1024px) and (resolution: 163dpi)",
        },

        // iPad Air
        "ipad-air-portrait": { raw: "(width: 820px) and (resolution: 264dpi)" },
        "ipad-air-landscape": {
          raw: "(width: 1180px) and (resolution: 264dpi)",
        },
      },
      textShadow: {
        outline:
          "2px 2px 0 #000, -2px -2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000",
      },
      scale: ["hover"],
      boxShadow: {
        custom: "0 0 10px 5px rgba(0, 0, 0, 0.5)",
        custom2: "0 0 10px 5px rgba(255, 255, 255, 0.7)",
      },
      backgroundImage: {
        "custom-home": "url('/src/images/bgHome2.webp')",
        "custom-services": "url('/src/images/visitCard.webp')",
      },
      colors: {
        primary: "rgba(90, 90, 90, 1)",
        secondary: "rgba(250, 206, 37, 1)",
        secondaryHover: "rgba(220, 176, 30, 1)",
        blue: "rgba(149, 202, 234, 0.8)",
        textColor: "rgba(51, 51, 51, 1)",
        logo: "rgb(255,241,12)",
        logoBlue: "rgb(40,56,144)",
        customBg: "rgba(211,211,211, 0.5)",
        customTextBg: "rgba(0, 0, 0, 0.2)",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica Neue", "Helvetica", "sans-serif"],
      },
      keyframes: {
        drive: {
          "0%": { transform: "translateX(600%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        drive: "drive 10s linear infinite",
      },
      clipPath: {
        hexagon: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-outline": {
          "text-shadow":
            "2px 2px 0 #000, -2px -2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000",
        },
        ".clip-hexagon": {
          clipPath:
            "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
        },
      });
    },
    require("@tailwindcss/aspect-ratio"),
  ],
};
