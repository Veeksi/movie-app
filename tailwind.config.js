module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  variants: {
    scrollbar: ['dark'],
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
        card: 'var(--color-bg-card)',
        hover: 'var(--color-bg-hover)',
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        hover: 'var(--color-text-hover)',
        italic: 'var(--color-text-italic)',
      },
      borderColor: {
        primary: 'var(--color-border-primary)',
        hover: 'var(--color-border-hover)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
