/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        seasalt: 'var(--seasalt)',
        'raisin-black': 'var(--raisin-black)',
        'carrot-orange': 'var(--carrot-orange)',
        zomp: 'var(--zomp)',
      },
    },
  },
  plugins: [],
};
