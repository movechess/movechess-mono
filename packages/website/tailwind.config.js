/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "500px",

      md: "768px",

      lg: "1024px",

      xl: "1440px",

      "2xl": "1600px",
    },
  },
  plugins: [],
}

export default config
