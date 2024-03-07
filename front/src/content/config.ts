// @ts-ignore
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
  }),
});


const technologies = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    icon: z.string(),
  }),
});


export const collections = { posts, technologies };
