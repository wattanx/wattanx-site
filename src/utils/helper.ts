import type { PostItem } from "../../builder/posts";
import posts from "~/.contents/posts.json";

const hatena: PostItem[] = [
  {
    title: "バンドルサイズの比較をPR上にコメントする",
    link: "https://product.st.inc/entry/2022/03/24/111758",
    dateMiliSeconds: 0,
    isoDate: "2022-03-24T00:00:00.000Z",
  },
  {
    title: "Nuxt 3 への移行に向けて頑張ってます",
    link: "https://product.st.inc/entry/2022/12/11/112330",
    dateMiliSeconds: 0,
    isoDate: "2022-12-11T00:00:00.000Z",
  },
];

export function getPosts(): PostItem[] {
  return [...(posts as PostItem[]), ...hatena];
}

export function getHostFromURL(str: string) {
  const url = new URL(str);
  return url?.hostname || "blog";
}
export function getOriginFromURL(str: string) {
  const url = new URL(str);
  return url.origin;
}
export function getFaviconSrcFromHostname(hostname: string) {
  return `https://www.google.com/s2/favicons?domain=${hostname}&sz=256`;
}
