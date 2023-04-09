import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";

const window = new JSDOM("").window;

export const sanitize = (html: string) => {
  // @ts-ignore
  return DOMPurify(window).sanitize(html);
};
