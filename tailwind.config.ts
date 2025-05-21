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
        arrow: "url('/images/arrow.svg')",
        adele_home_bg: "url('/images/adele_home_bg.png')",
        film_home_bg: "url('/images/film_home_bg.png')",
        bella_is_film: "url('/images/bella_is_film.png')",
        know_thy_body_films_page: "url('/images/know_thy_body_films_page.png')",
        float_film_photo: "url('/images/film_home_bg.png')",
        test_bg: "url('/images/test-bg.png')",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
