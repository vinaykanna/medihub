/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
    },
  },
  plugins: [],
};
