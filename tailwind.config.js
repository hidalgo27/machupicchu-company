import colors from "tailwindcss/colors.js";
const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app2.vue",
    "./error.vue",
    "./node_modules/vue-tailwind-datepicker/**/*.js",
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Lato"', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        'slide-left-right': {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-20px)' }, // Se va a la izquierda
          '100%': { transform: 'translateX(20px)' } // Vuelve a la derecha y se superpone
        },
      },
      animation: {
        'slide-left-right': 'slide-left-right 0.5s ease-in-out forwards', // Duración y animación
      },
    },
    colors: {
      "vtd-primary": colors.sky, // Light mode Datepicker color
      "vtd-secondary": colors.gray, // Dark mode Datepicker color
      blue: colors.blue,
      green: colors.green,
      red: colors.red,
      amber: colors.amber,
      gray: colors.gray,
      white: colors.white,
      yellow: colors.yellow,
      fuchsia: colors.fuchsia,
      cyan: colors.cyan,
      primary: '#343a40',
      secondary: '#C1AA7F',
      tertiary: '#7c9aa3',
      transparent: 'transparent',
    },
    container: {
      center: true,
      // padding: '2rem',
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: []
}

