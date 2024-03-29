/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      screens: {
        mobile: { max: "767px" },
        tablet: { min: "786px", max: "1439px" },
        desktop: { min: "1440px" },
      },
      colors: {
        white: "#ffffff",
        black: "#121417",
        lightBlack: "rgba(18, 20, 23, 0.70)",
        lightGray: "#F8F8F8",
        darkYellow: "#F4C550",
        lightYellow: "#FBE9BA",
        brightGreen: "#38CD3E",
        gray: "#8A8A89",
        macBook: "#EEB055",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.8)",
      },
      fontSize: {
        sm: "14px",
        base: "16px",
        m: "18px",
        ms: "20px",
        lg: "24px",
        xl: "28px",
        xl2: "40px",
        xxl: "48px",
      },
    },
  },
  plugins: [],
};
