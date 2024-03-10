/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "540px",

      md: "768px",

      lg: "1150px",

      xl: "1440px",

      "2xl": "1600px",
    },
  },
  plugins: [],
}

export default config
