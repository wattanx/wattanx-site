import Parser from "rss-parser";
import fs from "fs-extra";
import { articles, Article } from "../articles";

type FeedItem = {
  title: string;
  link: string;
  contentSnippet?: string;
  isoDate?: string;
  dateMiliSeconds: number;
};

export type PostItem = {
  title: string;
  link: string;
  contentSnippet?: string;
  isoDate?: string;
  dateMiliSeconds: number;
};

const parser = new Parser();
let allPostItems: PostItem[] = [];

async function fetchFeedItems(url: string) {
  const feed = await parser.parseURL(url);
  if (!feed?.items?.length) return [];

  // return item which has title and link
  return feed.items
    .map(({ title, contentSnippet, link, isoDate }) => {
      return {
        title,
        contentSnippet: contentSnippet?.replace(/\n/g, ""),
        link,
        isoDate,
        dateMiliSeconds: isoDate ? new Date(isoDate).getTime() : 0,
      };
    })
    .filter(({ title, link }) => title && link) as FeedItem[];
}

async function getFeedItemsFromSources(sources: undefined | string[]) {
  if (!sources?.length) return [];
  let feedItems: FeedItem[] = [];
  for (const url of sources) {
    const items = await fetchFeedItems(url);
    if (items) feedItems = [...feedItems, ...items];
  }
  return feedItems;
}

async function getMemberFeedItems(article: Article): Promise<PostItem[]> {
  const { sources } = article;
  const feedItems = await getFeedItemsFromSources(sources);
  if (!feedItems) return [];

  let postItems = feedItems.map((item) => {
    return {
      ...item,
    };
  });

  return postItems;
}

(async function () {
  for (const article of articles) {
    const items = await getMemberFeedItems(article);
    if (items) allPostItems = [...allPostItems, ...items];
  }
  allPostItems.sort((a, b) => b.dateMiliSeconds - a.dateMiliSeconds);
  fs.ensureDirSync("src/.contents");
  fs.writeJsonSync("src/.contents/posts.json", allPostItems);
})();
