/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      translate: {
        '101': '101%',
      },
      keyframes: {
        marquee: {
          'from': { transform: 'translateX(0%)' },
          'to': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
      fontFamily: {
        Digitall: ['Digitall', 'sans-serif'],
        GradientsFont: ['GradientsFont', 'sans-serif'],
        TurretRoad: ['TurretRoad', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
