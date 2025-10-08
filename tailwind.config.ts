import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {}
    },
  },
  plugins: [daisyui],
  // @ts-expect-error - DaisyUI menambahkan properti custom
  daisyui: {
    themes: false,
  },
};

export default config;
