/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-blue": "#039DBD",
      },
      dropShadow: {
        "block-shadow": "0px 0px 15px rgba(0, 85, 133, 0.4)",
      },
    },
  },
  plugins: [],
};
