import { z, defineCollection }  from "astro:content";

const blogCollection = defineCollection({
  schema: z.object ({
    title: z.string(),
    description: z.string().max(160, "Description must be less than 160 characters"),
    author: z.enum(["Shivani Bhat"]),
    date: z.date(),
    draft: z.boolean(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

export const collections = { blog: blogCollection };