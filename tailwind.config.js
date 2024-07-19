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
        custom: "850px", // Custom breakpoint
        customFooter: "970px",
      },
      textShadow: {
        outline:
          "2px 2px 0 #000, -2px -2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000",
      },
      scale: ["hover"], // Enable hover for scaling
      boxShadow: {
        custom: "0 0 10px 5px rgba(0, 0, 0, 0.5)",
        custom2: "0 0 10px 5px rgba(255, 255, 255, 0.7)",
      },
      backgroundImage: {
        "custom-img": "url('/public/images/bgZid.jpg')",
        "custom-home": "url('/public/images/bgHome2.webp')",
        "custom-services": "url('/public/images/visitCard.webp')",
        
     
      },
      colors: {
        primary: "rgba(55, 73, 87, 0.9)",
        secondary: "rgba(250, 206, 37, 1)",
        blue: "rgba(149, 202, 234, 0.8)",
        textColor: "rgba(51, 51, 51, 1)",
        logo: "rgb(255,241,12)",
        logoBlue: "rgb(40,56,144)",
        customBg: "rgba(211,211,211, 0.5)",
      },
      fontFamily: {
        sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      keyframes: {
        drive: {
          "0%": { transform: "translateX(600%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        drive: "drive 7s linear infinite",
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
