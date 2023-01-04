import type { PostItem } from "../../builder/posts";
import posts from "../../.contents/posts.json";

export function getPosts(): PostItem[] {
  return posts as PostItem[];
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
  return `https://www.google.com/s2/favicons?domain=https://zenn.dev`;
}
