import { getCollection } from "astro:content";

export const getBlogs = async () => {
  const posts = await getCollection("blog");
  return posts;
};
