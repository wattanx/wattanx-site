export const SiteHeader: React.FC = () => {
  return (
    <header className={`bg-gray-900 sticky py-4 px-0 top-0 z-[99]`}>
      <div className="my-0 mx-auto max-w-[850px] py-0 px-6">
        <div className="flex flex-row items-center font-bold justify-between">
          <div>
            <a href="/" className="items-center no-underline">
              {" "}
              wattanx
            </a>
          </div>
          <div className="items-center">
            <a
              rel="prefetch"
              href="/timeline"
              className="py-2 px-4 cursor-pointer text-base no-underline hover:bg-gray-800 hover:duration-200 hover:rounded-md"
            >
              Timeline
            </a>

            <a
              rel="prefetch"
              href="/blog"
              className="py-2 px-4 text-base cursor-pointer no-underline hover:bg-gray-800 hover:duration-200 hover:rounded-md"
            >
              Blog
            </a>
            <a
              rel="prefetch"
              href="/about"
              className="py-2 px-4 text-base cursor-pointer no-underline hover:bg-gray-800 hover:duration-200 hover:rounded-md"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
