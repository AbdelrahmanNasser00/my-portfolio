/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "hsl(225deg 100% 75%)",
        secondary: "#ae00ff",
        third: "hsl(210deg 15% 6%)",
      },
      boxShadow: {
        "profile-glow": "0 0 20px 5px hsl(200deg 50% 30%)",
        "profile-hover": "0 0 25px 10px hsl(214deg 40% 11%)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, hsl(214deg 40% 11%), hsl(200deg 50% 30%))",
      },
      colors: {
        "dark-blue": "hsl(214deg 40% 11%)",
        "muted-blue": "hsl(200deg 50% 30%)",
        "accent-light-blue": "hsl(200deg 70% 50%)",
        "light-teal": "hsl(180deg 60% 40%)",
        "soft-purple": "hsl(260deg 50% 40%)",
        "light-gray": "hsl(0deg 0% 85%)",
        "dark-gray": "hsl(0deg 0% 20%)",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
