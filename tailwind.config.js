module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  variants: {
    display: ['responsive', 'group-hover', 'group-focus'],
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
};
