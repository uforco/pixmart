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
        primarycolorsass: "var(--primarycolor)",
        lightprimarycolorsass: "var(--lightprimarycolor)",
        secondarycolorsass: "var(--secondarycolor)",
        opionalcolorsass: "var(--opionalcolor)",
        primaryColor: "#0F73F6",
        secondaryColor: "#F0F6FD",
        opionalColor: "#222222",
        lightPrimaryColor: "#e9f3ff"
      },
    },
  },
  plugins: [],
};
export default config;
