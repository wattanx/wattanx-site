/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly FORMURL: string;
  readonly GITHUB_TOKEN: string;
  readonly MICROCMS_APIKEY: string;
  readonly MICROCMS_SERVICEID: string;
  readonly CONTENT_ID: string;
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
