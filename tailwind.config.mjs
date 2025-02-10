/** @type {import('tailwindcss').Config} */
export default {
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
        purple: {
          300: '#d096ba',
          400: '#dbc3d3',
          500: '#d096ba',
        },
        lime:{
          100: '#c4ddca',
          200: '#b2cdb9y',
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
