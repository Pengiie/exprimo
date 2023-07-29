/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-raleway)"],
        body: ["var(--font-ubuntu)"],
        "body-light": ["var(--font-ubuntu-light)"],
      },
      colors: {
        primary: {
          DEFAULT: "#B38DC8",
          50: "#FFFFFF",
          100: "#FCFBFD",
          200: "#EAE0F0",
          300: "#D8C4E3",
          400: "#C5A9D5",
          500: "#B38DC8",
          600: "#9A67B6",
          700: "#7E4A9A",
          800: "#5F3874",
          900: "#40264F",
          950: "#311D3C",
        },
        secondary: {
          DEFAULT: "#221117",
          50: "#9C4E6A",
          100: "#8F4761",
          200: "#743A4E",
          300: "#582C3C",
          400: "#3D1F29",
          500: "#221117",
          600: "#1B0E12",
          700: "#140A0E",
          800: "#0E0709",
          900: "#070305",
          950: "#030202",
        },
        accent: {
          DEFAULT: "#8951A9",
          50: "#DCCBE6",
          100: "#D3BEE0",
          200: "#C1A2D2",
          300: "#AE86C5",
          400: "#9C6BB8",
          500: "#8951A9",
          600: "#6A3F83",
          700: "#4C2D5D",
          800: "#2D1A37",
          900: "#0E0811",
          950: "#000000",
        },
        "accent-green": {
          DEFAULT: "#829777",
          50: "#E2E7DF",
          100: "#D7DED3",
          200: "#C2CCBC",
          300: "#ACBAA5",
          400: "#97A98E",
          500: "#829777",
          600: "#66795D",
          700: "#4C5944",
          800: "#313A2C",
          900: "#161A14",
          950: "#080A08",
        },
        text: "#fafafa",
        background: "#050505",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(closest-side, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};