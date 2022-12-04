/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      code: "Fira Code, sans-serif",
    },
    extend: {
      colors: {
        "mack-purple": "#581C87",
        "mack-slate": "#262626",
        "mack-white": "#F1F5F9",
        "mack-blue": "#93c5fd",
      },
      screens: {
        "3xl": "2750px",
      },
    },
  },
  plugins: [],
};
