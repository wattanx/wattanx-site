export const SiteHeader: React.FC<{ borderBottomColor?: string }> = ({
  borderBottomColor,
}) => {
  const border = `border-[1px] border-t-0 border-x-0 ${borderBottomColor}`;
  return (
    <header className={`bg-dark-500 sticky py-4 px-0 top-0 z-[99] ${border}`}>
      <div className="my-0 mx-auto max-w-[850px] py-0 px-6">
        <div className="flex flex-row items-center font-bold justify-between">
          <div>
            <a href="/" className="items-center no-underline">
              wattanx
            </a>
          </div>
          <div className=" items-center">
            <a
              href="/timeline"
              className=" ml-6 cursor-pointer text-base no-underline"
            >
              Timeline
            </a>

            <a
              href="/blog"
              className="ml-6 text-base cursor-pointer no-underline"
            >
              Blog
            </a>
            <a
              href="/about"
              className="ml-6 text-base cursor-pointer no-underline"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
