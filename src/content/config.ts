// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const blogCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    publishedDate: z.date(),
    image: z.string().optional(),
  }),
});
const projectCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    id: z.string(),
    students: z.array(z.string()),
    instructors: z.array(z.string()),
    techs: z.array(z.string()),
    videos: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    levels: z.array(z.string()),
    difficulty: z.string(),
    durationMins: z.array(z.bigint()),
    events: z.array(z.string()).optional(),
    semester: z.string(),
    year: z.bigint(),
    publishedDate: z.date(),
    image: z.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'posts': blogCollection,
  'projects': projectCollection,
};
