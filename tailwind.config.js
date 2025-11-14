import colors from 'tailwindcss/colors';

const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css}',
  ],
  theme: {
    colors: {
      primary: 'red',
    },
  },
  plugins: [],
};

export default config;
