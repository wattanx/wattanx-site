import * as Tabs from "@radix-ui/react-tabs";

const { List, Root, Trigger, Content } =
  (Tabs as unknown as { default: typeof Tabs }).default || Tabs;

export const CustomTabs = Root;

export const TabList = List;

export const CustomTab = Trigger;

export const TabPanel = Content;
