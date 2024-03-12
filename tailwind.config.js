/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "profile-logo": "url('/frontend_dev_logo.jpeg')",
      },
      backgroundSize: {
        custom: "200px 100px",
      },
    },
  },
  plugins: [],
};
