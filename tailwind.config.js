import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        silkscreen: ["'Silkscreen'", ...defaultTheme.fontFamily.sans],
        bokor: ["'Bokor'", "sans-serif"],
      },
    },
  },
  plugins: [],
};