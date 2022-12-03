/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      header: "Fira Code",
    },
    extend: {
      colors: {
        "mack-purple": "#581C87",
        "mack-slate": "#262626",
        "mack-white": "#F1F5F9",
      },
      screens: {
        "3xl": "2750px",
      },
    },
  },
  plugins: [],
};
