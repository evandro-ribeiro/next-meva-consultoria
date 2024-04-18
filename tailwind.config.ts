import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "yellow-gradient": "linear-gradient(to right, #fef800, #686b00)"
      },
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"],
        "abril": ["Abril", "serif"]
      }
    },
  },
  plugins: [],
};
export default config;
