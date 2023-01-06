import { Octokit, RestEndpointMethodTypes } from "@octokit/rest";
import { getLanguageColor, LanguageList } from "~/utils/getLanguageColor";

export const client = new Octokit({
  auth: import.meta.env.GITHUB_TOKEN,
});

export const getRepositories = async () => {
  const { data } = (await client.request(
    "GET /users/wattanx/repos"
  )) as RestEndpointMethodTypes["repos"]["listPublic"]["response"];
  return data
    .filter((x) => x.stargazers_count && x.stargazers_count > 0)
    .sort((a, b) => b.stargazers_count! - a.stargazers_count!);
};

export const getRepositoryInfo = async (): Promise<
  {
    title: string;
    url: string;
    description: string | null;
    stargazers_count: number | undefined;
    language: {
      name: string | null | undefined;
      colorCode:
        | "#3178c6"
        | "#f1e05a"
        | "#563d7c"
        | "#c6538c"
        | "#178600"
        | "#41b883";
    };
  }[]
> => {
  const repo = await getRepositories();
  const repoInfo = repo.map((x) => {
    return {
      title: x.full_name,
      url: x.html_url,
      description: x.description,
      stargazers_count: x.stargazers_count,
      language: {
        name: x.language,
        colorCode: getLanguageColor(x.language as LanguageList),
      },
    };
  });

  return repoInfo;
};
