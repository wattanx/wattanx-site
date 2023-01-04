import {
  getFaviconSrcFromHostname,
  getOriginFromURL,
  getPosts,
} from "~/utils/helper";

const ArticleCard: React.FC<{
  link: string;
  title: string;
  hostname: string;
}> = ({ link, title, hostname }) => (
  <div className="flex space-y-4 flex-col justify-between bg-[#202225] border-[1px] border-[#131418] rounded-lg p-4">
    <a href={link} target="_blank" rel="nofollow noopener">
      <p className=" font-bold text-xl pb-4 min-h-[95px]">{title}</p>

      <div className="flex flex-row items-center space-x-4">
        <img height="16" width="16" src={getFaviconSrcFromHostname(hostname)} />
        <p className=" text-sm">{hostname}</p>
      </div>
    </a>
  </div>
);

export const ArticleCardBlock: React.FC<{
  posts: ReturnType<typeof getPosts>;
}> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {posts.map((prop, index) => {
        const { title, isoDate, link, dateMiliSeconds } = prop;

        const hostname = getOriginFromURL(link);

        return (
          <ArticleCard
            title={title}
            link={link}
            hostname={hostname}
            key={link}
          />
        );
      })}
    </div>
  );
};
