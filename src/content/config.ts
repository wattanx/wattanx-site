import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    layout: z.string().optional(),
    title: z.string(),
    description: z.string(),
    date: z.string(),
    image: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
