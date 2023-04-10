import { createClient } from "microcms-js-sdk";
import type { MicroCMSObjectContent } from "microcms-js-sdk";

type Works = MicroCMSObjectContent & {
  job_description: string;
};

export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICEID,
  apiKey: import.meta.env.MICROCMS_APIKEY,
});

export async function getWorks() {
  return client.get<Works>({
    endpoint: "works",
    contentId: import.meta.env.CONTENT_ID,
  });
}
