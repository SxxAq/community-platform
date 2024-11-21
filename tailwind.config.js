/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Move this to the root level
  theme: {
    extend: {
      // Your theme extensions here
    },
  },
  plugins: [],
};
