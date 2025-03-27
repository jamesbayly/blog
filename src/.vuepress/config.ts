import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "en-US",
  title: "Perspectives from James Bayly",
  description: "A collection of musings and thoughts from the road.",
  theme,
  head: [
    [
      "style",
      {},
      `\
        /* latin */
        @font-face {
          font-family: 'Raleway';
          font-style: italic;
          font-weight: 100 900;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/raleway/v34/1Ptsg8zYS_SKggPNyCg4TYFqL_KWxQ.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
          /* latin */
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-weight: 100 900;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyC0IT4ttDfA.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
      `,
    ],
  ],
  plugins: [
    googleAnalyticsPlugin({
      id: "G-7K4P1YKJKV",
    }),
  ],
});
