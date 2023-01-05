import { ArrowRight } from "~/components/ArrowRight";

export type NavigationButtonProps = {
  href: string;
  text: string;
  borderColor: string;
};

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  href,
  text,
  borderColor,
}) => {
  const border = `border-[3px] border-solid ${borderColor}`;
  return (
    <a className="hover:underline text-white" href={href}>
      <div
        className={`flex justify-center items-center cursor-pointer rounded-[92px] p-4 ${border}`}
      >
        <div className="flex justify-between flex-row w-[172px] items-center">
          <h2 className="font-bold  text-xl text-white">{text}</h2>
          <div></div>
          <ArrowRight className="text-white" />
        </div>
      </div>
    </a>
  );
};
