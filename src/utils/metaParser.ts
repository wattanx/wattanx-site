import { load } from "cheerio";

export type MetaFieldType = {
  title: string;
  description: string;
  ogImage: string;
};

export const perseMeta = (htmlString: string): MetaFieldType => {
  const $ = load(htmlString);

  const description = $('meta[name="description"]').attr("content") ?? "";
  const title = $('meta[property="og:title"]').attr("content") ?? "";
  const ogDescription =
    $('meta[property="og:description"]').attr("content") ?? "";
  const ogImage = $('meta[property="og:image"]').attr("content") ?? "";

  return {
    title,
    description: description || ogDescription,
    ogImage,
  };
};
