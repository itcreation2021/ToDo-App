/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D0D22",
        secondary: "#6161F3",
      },
    },
  },
  plugins: [],
};
