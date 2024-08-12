import type { Config } from "tailwindcss";
// import { Roboto_Condensed } from "next/font/google";

// const roboto_condensed = Roboto_Condensed({
//   subsets: ["latin"],
//   weight: ["300", "400", "700"],
// });

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scale: {
          "0%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
    animation: {
      marquee: "marquee 7s linear infinite",
      scale: "scale 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both",
    },
    // fontFamily: {
    //   roboto_condensed,
    // },
  },
  plugins: [],
};
export default config;
