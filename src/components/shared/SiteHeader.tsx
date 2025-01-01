export const SiteHeader: React.FC = () => {
  return (
    <header className={`dark:bg-gray-900 bg-[#fdfdfc] py-4 px-0`}>
      <div className="my-0 mx-auto max-w-[850px] py-0 px-6">
        <div className="flex flex-row items-center font-bold justify-between">
          <div>
            <a href="/" className="items-center no-underline">
              {" "}
              wattanx
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
