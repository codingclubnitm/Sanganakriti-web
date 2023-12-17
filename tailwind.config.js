/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        berkshire: ["Berkshire Swash", "serif"],
      },
      colors: {
        background: "#000000",
        // "primary-white": "#f8f9f9",
        // "gray-white": "#a2a9b5",
        // "dark-gray": "#84848f",
        // "gray-black": "#878c94",
        // "gray-blue": "#7c8c9c",
        // "gray-skin": "#bcbcc4",
        // "gray": "#bdc4c4",
        // "light-gray": '#c9ced5'
      },
    },
  },
  plugins: [],
};
