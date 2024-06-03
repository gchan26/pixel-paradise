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
        "dark-blue": {
          900: "#050B14",
          800: "#080E16",
          700: "#101821",
          600: "#171E26",
          500: "#1D232A",
          400: "#323B44",
          300: "#48525C",
          200: "#5F6A74",
          100: "#969EA5",
          50: "#C9D4DE",
        },
        "light-blue": {
          900: "#031F3F",
          800: "#033269",
          700: "#044088",
          600: "#054B9E",
          500: "#0055BA",
          400: "#1F67BD",
          300: "#3883DC",
          200: "#5A9BE7",
          100: "#81B5F1",
          50: "#C0D7F1",
        },

      },
    },
  },

  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}