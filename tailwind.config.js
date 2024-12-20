/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      "nunito-medium": ["Nunito-Medium"],
      "nunito-regular": ["Nunito-Regular"],
      "nunito-bold": ["Nunito-SemiBold"],
    },
    extend: {
      colors: {
        primary: {
          solid: "#E77E3A",
          light: "#FAE5D8",
        },
        secondary: {
          light: "#E6EFF6",
          medium: "#BBD6EB",
          solid: "#7BAED4",
        },
        grey: "#737373",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
        scaleOut: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.95)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out",
        fadeOut: "fadeOut 0.3s ease-in",
        scaleIn: "scaleIn 0.3s ease-out",
        scaleOut: "scaleOut 0.3s ease-in",
      },
      boxShadow: {
        custom: "0px 2px 10px 0 rgba(227, 133, 64, 0.4)",
      },
    },
  },
  plugins: [],
};
