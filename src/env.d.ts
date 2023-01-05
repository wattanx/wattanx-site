/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly FORMURL: string;
  readonly GITHUB_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

type BlogFrontmatter = {
  date: string;
  title: string;
  description: string;
  image: string;
  tags: string;
};
