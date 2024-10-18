/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#02b9e3",
        blue: "#00a5e4",
        blueLight: "#2d84b4",
        blueDark: "#12556d",
        lightPrimary: "#f7f7f7",
        secondary: "#1f2a42",
        secondaryLight: "#97afb9",
      },
      fontFamily: {
        sans:['"Open Sans"','"Poppins"',"sans-serif"]
      }
    },
  },
  plugins: [],
};

