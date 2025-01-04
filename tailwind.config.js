/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#4fd1c5",
      },
      boxShadow: {
        "profile-glow": "0 0 20px 5px #4fd1c5",
        "profile-hover": "0 0 25px 10px rgba(79, 209, 197, 0.6)",
      },
    },
  },
  plugins: [],
};
