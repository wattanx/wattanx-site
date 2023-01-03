export const Footer: React.FC = () => (
  <footer className="p-7">
    <div className="flex justify-center items-center">
      <div className="flex flex-col space-y-4">
        <p className="text-sm pb-2 text-center">
          © {new Date().getFullYear()} wattanx
        </p>
        <p className="text-sm">
          This site uses Google Analytics.{` `}
          <a
            href="https://policies.google.com/technologies/partner-sites?hl=ja"
            target="_blank"
            rel="external noopener"
            className="underline"
          >
            See more details
          </a>
        </p>
      </div>
    </div>
  </footer>
);
