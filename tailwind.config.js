/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#4B9E60", // Add custom color
        customBlue: "#121535",
      },
      fontFamily: {
        quick: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
