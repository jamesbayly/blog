import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Posts",
    icon: "book",
    link: "/posts/",
  },
  {
    text: "About",
    icon: "user",
    link: "/intro",
  },
  {
    text: "Galleries",
    icon: "images",
    link: "https://www.bayly.xyz/browse",
  },
]);
