export type TimelineType = "works" | "articles";

export type TimelineOfWorks = {
  id: string;
  companyName: string;
  link: string;
  year: number;
  month: number;
  day: number;
  joinedDate?: string;
  leavedDate?: string;
};

export type TimelineOfArticle = {
  id: string;
  title: string;
  link: string;
  year: number;
  month: number;
  day: number;
  publishedDate: string;
};

export type Timeline = {
  works: TimelineOfWorks[];
  articles: TimelineOfArticle[];
};

export type ArticleType = {
  title: string;
  link: string;
  favicon: string;
  hostName: string;
  contentSnippet?: string;
  isoDate?: string;
  dateMiliSeconds?: number;
};
