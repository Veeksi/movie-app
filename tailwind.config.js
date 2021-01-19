module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  variants: {
    display: ['responsive', 'group-hover', 'group-focus'],
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
};
