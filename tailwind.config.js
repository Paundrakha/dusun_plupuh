/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        tosca: {
          50: "#eefbf9",
          100: "#d4f4ef",
          200: "#a9e9e0",
          300: "#78d9cc",
          400: "#45c2b3",
          500: "#26a699",
          600: "#1c847d",
          700: "#1a6a66",
          800: "#195552",
          900: "#194846",
        },
        forest: {
          50: "#f1f9ee",
          100: "#dff1d8",
          200: "#c0e2b4",
          300: "#97cd84",
          400: "#6cb459",
          500: "#4c9639",
          600: "#39772c",
          700: "#2e5e25",
          800: "#284b21",
          900: "#233f1e",
        },
        harvest: {
          50: "#fff7ed",
          100: "#ffecd4",
          200: "#ffd5a8",
          300: "#ffb670",
          400: "#ff9138",
          500: "#fd7213",
          600: "#ee5709",
          700: "#c5410a",
          800: "#9c3410",
          900: "#7e2d10",
        },
        ink: {
          50: "#f6f7f7",
          100: "#e2e4e4",
          200: "#c5c9ca",
          300: "#9fa5a7",
          400: "#767d80",
          500: "#5c6366",
          600: "#4a5052",
          700: "#3d4244",
          800: "#33373a",
          900: "#202325",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(180deg, rgba(20,44,42,0.35) 0%, rgba(20,44,42,0.75) 100%)",
        "section-gradient": "linear-gradient(135deg, #eefbf9 0%, #f1f9ee 100%)",
        "mountain-gradient": "linear-gradient(180deg, #26a699 0%, #1a6a66 100%)",
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(26,106,102,0.25)",
        card: "0 8px 30px rgba(32,35,37,0.08)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
      },
    },
  },
  plugins: [],
};
