/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly FORMURL: string;
  readonly GITHUB_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
