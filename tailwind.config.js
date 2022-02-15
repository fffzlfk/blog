module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'h2': {
              paddingLeft: '9px',
              borderLeft: '6px solid #ff7e79'
            },
            'a': {
              'color': '#577BC1',
              'text-decoration': 'none',
            },
            'a:hover': {
              'color': '#ff7e79',
            },
            'a:focus': {
              'outline-offset': '-2px'
            },
            'word-wrap': 'break-word',
            'word-break': 'break-all'
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
