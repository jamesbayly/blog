import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";

export default hopeTheme({
  hostname: "https://bayly.xyz",
  author: {
    name: "James Bayly",
    url: "https://bayly.xyz",
  },
  logo: "/logo.png",
  docsDir: "src",
  navbar,
  sidebar: false,
  footer:
    "A collection of musings and thoughts from the road. Everything is the sole opinion of James Bayly, from some historic point of time.",
  displayFooter: true,
  darkmode: "auto",
  blog: {
    description: `A collection of musings and thoughts from the road. Read more about why this website exists?`,
    intro: "/intro.html",
    medias: {
      Email: "mailto:james@bayly.xyz",
      Instagram: "https://www.instagram.com/j_bayly/",
    },
    articlePerPage: 50,
    articleInfo: ["Date", "ReadingTime", "Tag"],
  },
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
  },

  plugins: {
    blog: true,
    catalog: {
      frontmatter: (path) => ({
        // frontmatter you want
        // you may customize title, author. time, etc.
      }),
      locales: {
        "en-US": {
          title: "Posts",
        },
      },
    },
    components: {
      components: ["Badge", "VPCard"],
    },
    icon: {
      prefix: "fa6-solid:",
    },
    seo: true,
    sitemap: true,
    feed: {
      rss: true,
    },
  },
});
