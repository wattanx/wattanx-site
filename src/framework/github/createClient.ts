import { Octokit } from "@octokit/rest";
import type { RestEndpointMethodTypes } from "@octokit/rest";
import { getLanguageColor } from "~/utils/getLanguageColor";
import type { ColorList, LanguageList } from "~/utils/getLanguageColor";

export const client = new Octokit({
  auth: import.meta.env.GITHUB_TOKEN,
});

export const getRepositories = async () => {
  const { data } = (await client.request("GET /users/wattanx/repos", {
    per_page: 30,
    sort: "updated",
  })) as RestEndpointMethodTypes["repos"]["listPublic"]["response"];

  return data
    .filter((x) => x.stargazers_count && x.stargazers_count > 0 && !x.archived)
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
      colorCode: ColorList;
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
