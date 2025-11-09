module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}",
    
  ],
  theme: {
      colors: {
        primary1: {
            DEFAULT: '#1D4ED8' // OK pour bg-primary1
          },
         test: {
          DEFAULT: "hsl(var(--test))", // Pointe vers la variable CSS
          foreground: "hsl(var(--test-foreground))", // Optionnel, mais recommandé
        },
          accent: {
            DEFAULT: '#FBBF24', // 👈 Correction pour bg-accent
          },
          background: {
            DEFAULT: '#F9FAFB', // 👈 Correction pour bg-background
          },
          foreground: {
            DEFAULT: '#111827', // 👈 Correction pour bg-foreground
          },
      },
  },
  plugins: [],
};