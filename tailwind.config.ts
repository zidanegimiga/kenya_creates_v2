import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['"Satoshi"', 'sans-serif'],
        pangaia: ['"PP Pangaia"', 'sans-serif'],
        spacemono: ['"Space Mono"', 'monospace'],
        fraunces: ['"Fraunces"', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
