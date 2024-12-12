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
          solid: "#7BAED4",
        },
      },

      boxShadow: {
        'custom': '0px 2px 10px 0 rgba(227, 133, 64, 0.4)',
      },
    },
  },
  plugins: [],
};
