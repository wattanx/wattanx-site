import * as Tabs from "@radix-ui/react-tabs";

const { List, Root, Trigger, Content } =
  (Tabs as unknown as { default: typeof Tabs }).default || Tabs;

type Props = {
  children: React.ReactNode;
};

export const CustomTabs = Root;

export const TabList = List;

export const CustomTab = Trigger;

export const TabPanel = Content;
