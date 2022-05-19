const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      container: {
        // center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      addComponents({
        ".bg-hover-brand": {
          backgroundColor: "#f3f4f6",
          "&:hover": {
            backgroundColor: "#e5e5e5",
          },
        },
        ".bg-hover": {
          backgroundColor: "hsl(322, 100%, 66%)",
          "&:hover": {
            opacity: ".9",
          },
        },
        ".bg-hover-darkside": {
          backgroundColor: "transparant",
          "&:hover": {
            backgroundColor: "#475569",
            opacity: ".3",
          },
        },
      });
    }),
  ],
};
