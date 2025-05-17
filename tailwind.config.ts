import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['"Satoshi"', "sans-serif"],
        pangaia: ['"PP Pangaia"', "sans-serif"],
        spacemono: ['"Space Mono"', "monospace"],
        fraunces: ['"Fraunces"', "serif"],
      },
      backgroundImage: {
        "overlay-pattern": "url('/images/pattern.svg')",
        "right-pattern": "url('/images/pattern_right.svg')",
        "arrow": "url('/images/arrow.svg')",
        "adele_home_bg": "url('/images/adele_home_bg.png')",
        "test_bg": "url('/images/test-bg.png')",
      },
    },
  },
  plugins: [],
};
export default config;
