import { getStringOfMonth } from "~/utils/date";
import {
  getFaviconSrcFromHostname,
  getHostFromURL,
  getOriginFromURL,
} from "~/utils/helper";
import { CustomTab, CustomTabs, TabList, TabPanel } from "./Tab";
import type { Timeline, TimelineOfArticle, TimelineOfWorks } from "./types";

export const TimelineRow: React.FC<{
  borderVisible?: boolean;
  children?: React.ReactNode;
}> = ({ borderVisible, children }) => {
  const before = borderVisible
    ? `before:content-[''] before:absolute before:left-[-2px] before:w-[2px] before:h-[100%] before:bg-[#000]`
    : null;

  return (
    <div className={`relative pl-7 ${before} last:mt-11`}>
      <div className="bg-[#55555b] flex justify-center items-center top-[2px] left-[-9px] absolute border-4 border-[#131418] w-4 h-4 rounded-full" />
      <div className=" text-base whitespace-pre-wrap [word-spacing:0.1em]">
        {children}
      </div>
    </div>
  );
};

const WorksTimelineRow: React.FC<
  TimelineOfWorks & {
    borderVisible?: boolean;
  }
> = ({ companyName, joinedDate, leavedDate, borderVisible, link }) => {
  const title = joinedDate ? `Joined ` : leavedDate ? `Leaved ` : "";
  return (
    <TimelineRow borderVisible={borderVisible}>
      {title}
      <a
        className="hover:underline hover:underline-offset-2"
        href={link}
        target="_blank"
        rel="nofollow noopener"
      >
        {companyName}
      </a>
    </TimelineRow>
  );
};

const ArticleCard: React.FC<TimelineOfArticle> = (props) => {
  const { title, link } = props;

  const hostname = getOriginFromURL(link);
  return (
    <div className="flex mt-4 flex-col">
      <a
        className="flex items-center leading-snug z-[2] text-sm bg-[#202225] border-[1px] border-[#131418] rounded-lg p-4"
        href={link}
        target="_blank"
        rel="nofollow noopener"
      >
        <img
          className=" flex-shrink-0 mt-[2px]"
          src={getFaviconSrcFromHostname(hostname)}
          alt=""
          width="16"
          height="16"
        />
        <p className=" flex-1 ml-3">{title}</p>
      </a>
    </div>
  );
};

const ArticlesTimeline: React.FC<{
  data: TimelineOfArticle[];
  month: number;
}> = ({ data, month }) => {
  const originList = [...new Set(data.map((x) => getOriginFromURL(x.link)))];

  let articles: { origin: string; contents: TimelineOfArticle[] }[] = [];

  for (const origin of originList) {
    const contents = data.filter((x) => getOriginFromURL(x.link) === origin);
    articles = [...articles, { origin, contents }];
  }

  return (
    <>
      {articles.map((article, index) => {
        const newTitle = `Published ${article.contents.length} posts on `;
        return (
          <TimelineRow key={index}>
            {newTitle}
            <a
              className="hover:underline hover:underline-offset-2"
              href={article.origin}
              target="_blank"
              rel="nofollow noopener"
            >
              {getHostFromURL(article.origin)}
            </a>{" "}
            in {getStringOfMonth(month)}
            {article.contents.map((x) => (
              <ArticleCard key={x.id} {...x} />
            ))}
          </TimelineRow>
        );
      })}
    </>
  );
};

export type TimelineData = {
  year: number;
  data: Timeline;
};

export type TimelineRowProps = {
  month: number;
  data: Timeline;
};

const TimelineRowWrapper: React.FC<TimelineRowProps> = ({ data, month }) => {
  return (
    <div className="last:mt-11">
      {data.works.length > 0 &&
        data.works.map((work) => {
          return (
            <WorksTimelineRow
              key={work.id}
              {...work}
              borderVisible={data.works.length > 0}
            />
          );
        })}
      {data.articles.length > 0 && (
        <ArticlesTimeline data={data.articles} month={month} />
      )}
    </div>
  );
};

export const TimelineViewRow: React.FC<{ data: Timeline }> = ({ data }) => {
  const works = [...new Set(data.works.map((x) => x.month))];
  const articles = [...new Set(data.articles.map((x) => x.month))];
  const months = [...new Set([...works, ...articles])];

  // 月毎のデータ
  let timelineData: TimelineRowProps[] = [];

  for (const month of months) {
    const works = data.works.filter((x) => x.month === month);
    const articles = data.articles.filter((x) => x.month === month);
    timelineData = [...timelineData, { month, data: { works, articles } }];
  }

  timelineData = timelineData.sort((a, b) => b.month - a.month);
  const before = `before:content[''] before:absolute before:left-[-2px] before:top-[10px] before:bottom-[0] before:w-[2px] before:bg-[#202225]`;
  return (
    <div className={`mt-6 ml-4 relative ${before}`}>
      {timelineData.map((x) => (
        <TimelineRowWrapper key={x.month} {...x} />
      ))}
    </div>
  );
};

export const TimelineBlock: React.FC<{ timelineData: TimelineData[] }> = ({
  timelineData,
}) => (
  <CustomTabs defaultValue="all">
    <TabList className="border-b-[#fff]/[.16] border-b-2 max-w-[max-content]">
      <CustomTab
        className="mb-[-2px] px-4 py-2 data-[state=active]:border-b-white data-[state=active]:border-b-2"
        value="all"
      >
        All
      </CustomTab>
      <CustomTab
        className="mb-[-2px] px-4 py-2 data-[state=active]:border-b-white data-[state=active]:border-b-2"
        value="works"
      >
        works
      </CustomTab>
      <CustomTab
        className="mb-[-2px] px-4 py-2 data-[state=active]:border-b-white data-[state=active]:border-b-2"
        value="writing"
      >
        writing
      </CustomTab>
      <CustomTab
        className="mb-[-2px] px-4 py-2 data-[state=active]:border-b-white data-[state=active]:border-b-2"
        value="others"
      >
        others
      </CustomTab>
    </TabList>
    <TabPanel value="all" className="pt-4">
      {timelineData.map((x) => (
        <section id={x.year.toString()} key={x.year}>
          <header>
            <h2 className=" text-2xl">{x.year}</h2>
          </header>
          <TimelineViewRow data={x.data} />
          <div className="w-[1px] h-20 shrink-[unset]" />
        </section>
      ))}
    </TabPanel>
    <TabPanel value="works" className="pt-4">
      {timelineData
        .map((x) => ({
          year: x.year,
          data: { works: x.data.works, articles: [] },
        }))
        .map((x) => (
          <section id={x.year.toString()} key={x.year}>
            <header>
              <h2 className=" text-2xl">{x.year}</h2>
            </header>
            <TimelineViewRow data={x.data} />
            <div className="w-[1px] h-20 shrink-[unset]" />
          </section>
        ))}
    </TabPanel>
    <TabPanel value="writing" className="pt-4">
      {timelineData
        .map((x) => ({
          year: x.year,
          data: { works: [], articles: x.data.articles },
        }))
        .map((x) => (
          <section id={x.year.toString()} key={x.year}>
            <header>
              <h2 className=" text-2xl">{x.year}</h2>
            </header>
            <TimelineViewRow data={x.data} />
            <div className="w-[1px] h-20 shrink-[unset]" />
          </section>
        ))}
    </TabPanel>
    <TabPanel value="others" className="pt-4">
      Comming soon.
    </TabPanel>
  </CustomTabs>
);
