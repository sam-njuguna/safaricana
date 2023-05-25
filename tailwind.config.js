/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        x_mobile: "350px",
        mobile: "450px",
        mobile_lg: "765px",
        tablet: "990px",
        tablet_lg: "1150px",
        laptop: "1300px",
      },
      fontFamily: {
        crimson: "var(--crimson)",
        jost: "var(--jost)",
      },
      backgroundColor: {
        bg: "#070707",
        bg_d: "#432623",
        bg_btn: "#E6AF71",
        bg_btn_var: "#985A27",
      },
      colors: {
        text_c: "#FFFFFF",
        text_g: "#C6C6C6",
        text_t: "#E6AF71",
      },
    },
  },
  plugins: [],
};
