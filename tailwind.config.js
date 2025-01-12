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
        primary: "#0ea5e9",
        dark: "#0369a1",
        secondary: "#0ea5e9",
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
  plugins: [
    
  ],
};
