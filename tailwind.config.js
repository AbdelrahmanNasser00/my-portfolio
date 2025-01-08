/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        one: "hsl(225deg 100% 75%)",
        two: "#ae00ff",
        three: "hsl(210deg 15% 6%)",
        "color-gray": "hsl(210deg 15% 18%)",
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
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        one: "hsl(225deg 100% 75%)",
        "custom-red": "hsl(333deg 100% 55%)",
        "dark-blue": "hsl(214deg 40% 11%)",
        "muted-blue": "hsl(200deg 50% 30%)",
        "accent-light-blue": "hsl(200deg 70% 50%)",
        "light-teal": "hsl(180deg 60% 40%)",
        "soft-purple": "hsl(260deg 50% 40%)",
        "light-gray": "hsl(0deg 0% 85%)",
        "dark-gray": "hsl(0deg 0% 20%)",
        white: "#ffffff",
        "color-content-outline": "hsl(210deg 10% 30%)",
        "color-gray": "hsl(210deg 15% 18%)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      textColor: {},
      fontFamily: {
        fontFamilyMono: ['"Cartograph CF"', "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
