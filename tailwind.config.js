/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#e0f2fe",
        dark: "#e0f2fe",
        secondary: "#e0f2fe",
      },
      screens: {
        "2xl": "1320px",
      },
      gridTemplateColumns: {
        "70/30": "20% 28%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
