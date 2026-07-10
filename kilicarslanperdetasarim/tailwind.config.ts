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
        tac: {
          red: "#C8102E",
          deep: "#8E0C21",
        },
        linen: {
          DEFAULT: "#FAF7F2",
          warm: "#F1EBE1",
        },
        charcoal: {
          DEFAULT: "#1F1B18",
          soft: "#55504B",
        },
        brass: "#A98E5B",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-figtree)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.08em",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 48s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
