/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      pink: {
        100: "#FFEAE7",
        200: "#FFD1CF",
        300: "#FFB7BA",
        400: "#FFA5B2",
        500: "#FF87A4",
        600: "#DB628B",
        700: "#B74476",
        800: "#932B62",
        900: "#7A1956",
      },
      blue: {
        100: "#DDFFFA",
        200: "#BCFFFB",
        300: "#9BFCFF",
        400: "#82F1FF",
        500: "#59E1FF",
        600: "#41B3DB",
        700: "#2C89B7",
        800: "#1C6393",
        900: "#11477A",
      },
      yellow: {
        100: "#FFFDE1",
        200: "#FFFAC3",
        300: "#FFF7A4",
        400: "#FFF48E",
        500: "#FFF069",
        600: "#DBCB4C",
        700: "#B7A734",
        800: "#938421",
        900: "#7A6B14",
      },
      dark: {
        200: "#282b2f",
        500: "#131418",
      },
      white: "#FFFFFF",
    },
    fontFamily: {
      heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
    },
    extend: {},
  },
  plugins: [],
};
