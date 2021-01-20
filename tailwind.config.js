module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  variants: {
    display: ['responsive', 'group-hover', 'group-focus'],
    extend: {
      opacity: ['disabled'],
    },
  },
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        container: 'var(--color-bg-container)',
        hover: 'var(--color-bg-hover)',
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        hover: 'var(--color-text-hover)',
      },
    },
  },
  plugins: [],
};
