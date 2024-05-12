/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#C3E8EF',
        onblue: '#3326AE',
        onred: '#fe382b',
        onsky: '#00C3F8',
        onyellow: '#FFC005',
        textPrimary: '#000013',
        textLight: '#C4BDD5',
        inputBg: '4E4D4D',
        ongrey: '#8980ce',
        ongrey2: '#f4f4fc',
        boldgrey: '#c5bcd5',
      },
    },
  },
  plugins: [],
};
