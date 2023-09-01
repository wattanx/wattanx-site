export const githubColorsData = {
  TypeScript: {
    color: "#3178c6",
    url: "https://github.com/trending?l=TypeScript",
  },
  JavaScript: {
    color: "#f1e05a",
    url: "https://github.com/trending?l=JavaScript",
  },
  CSS: {
    color: "#563d7c",
    url: "https://github.com/trending?l=CSS",
  },
  SCSS: {
    color: "#c6538c",
    url: "https://github.com/trending?l=SCSS",
  },
  "C#": {
    color: "#178600",
    url: "https://github.com/trending?l=Csharp",
  },
  Vue: {
    color: "#41b883",
    url: "https://github.com/trending?l=Vue",
  },
  Astro: {
    color: "#ff5a03",
    url: "https://github.com/trending?l=Astro",
  },
} as const;

export type LanguageList = keyof typeof githubColorsData;

export type ColorList = (typeof githubColorsData)[LanguageList]["color"];

export const getLanguageColor = (languageName: LanguageList) => {
  try {
    return githubColorsData[languageName].color;
  } catch (e: unknown) {
    throw new Error(`${languageName} color is nothing.`);
  }
};
