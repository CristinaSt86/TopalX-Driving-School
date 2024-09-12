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
        custom1: "768px",
        custom: "850px", // Custom breakpoint
        customFooter: "970px",
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
        // "custom-img": "url('/src/images/bgZid.jpg')",
        "custom-home": "url('/src/images/bgHome2.webp')",
        "custom-services": "url('/src/images/visitCard.webp')",
      },
      colors: {
        primary: "rgba(120, 120, 120, 1)",
        secondary: "rgba(250, 206, 37, 1)",
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
        drive: "drive 5s linear infinite",
      },
      clipPath: {
        hexagon:
          "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
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
