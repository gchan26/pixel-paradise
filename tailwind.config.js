/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: "0.625rem",
      sm: "0.75rem",
      md: "0.8125rem",
      base: "0.875rem",
      lg: "1rem",
      xl: "1.125rem",
      "2xl": "1.25rem",
      "3xl": "1.5rem",
      "4xl": "2rem",
      "5xl": "2.25rem",
      "6xl": "2.5rem",
      "7xl": "3rem",
      "8xl": "4rem",
      "9xl": "6rem",
      "10xl": "8rem",
    },

    flex: {
      0: "0 0 auto",
    },
    extend: {
      screens: {
        sm: "600px",
        md: "960px",
        lg: "1280px",
        xl: "1440px",
      },

      colors: {
        "main-blue": {
          900: "#020618",
          800: "#050A1E",
          700: "#0D1434",
          600: "#141C40",
          500: "#202A59",
          400: "#2B3668",
          300: "#414C7B",
          200: "#566191",
          100: "#7781AA",
          50: "#B1B7D2",
        },

      },
    },
  },

  plugins: [
    // eslint-disable-next-line no-undef
    // require('daisyui'),
  ],
}