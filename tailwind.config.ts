import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tPrimary: '#61087F',
        tSecondary: '#8C56AE',
        tTransition: '#CACBCC',
        tWhite: '#F9F6FA',
        tBlack: '#1B0C2C',
        tGrey: '#333333',
      },
      fontFamily: {
        'calistoga': ['var(--font-calistoga)', 'sans-serif'],
        'lexend': ['var(--font-lexend)', 'sans-serif'],
        'solway': ['var(--font-solway)', 'sans-serif'],
        'bungee': ['var(--font-bungee)', 'sans-serif'],
        'irene': ['Irene Florentina', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
