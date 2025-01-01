import { getCollection } from "astro:content";

export const getBlogs = async () => {
  const posts = await getCollection("blog");
  // date の降順に並び替え
  return posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );
};
