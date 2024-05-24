// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const blogCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    id: z.string(),
    tags: z.array(z.string()),
    semester: z.string(),
    year: z.number(),
    publishedDate: z.date(),
    image: z.string().optional(),
  }),
});
const imageLogoValidator = (img) => Math.abs(img.width / img.height - 1) < 0.1;
const imageLogoValidatorMsg = (img) => ({
  message: `Logo image must be close to square aspect ratio!\n${img.src} is ${img.width}x${img.height}.`,
});
const projectCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema:({ image }) => z.object({
    shortTitle: z.string().optional(),
    title: z.string(),
    id: z.string(),
    desc: z.string(),
    github: z.string().optional(),
    students: z.array(z.string()),
    instructors: z.array(z.string()),
    techs: z.array(z.string()),
    videos: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    levels: z.array(z.string()),      // most projects will be appropriate for all audiences, but otherwise it could be specified
    difficulty: z.array(z.string()), // project could be set up to be at different difficulties
    durationMins: z.array(z.number()),
    events: z.array(z.string()).optional(),
    semester: z.string(),
    year: z.number(),
    publishedDate: z.date(),
    relatedIds: z.array(z.string()).optional(),
    image: image().optional(),
    imageLogoLight: image().refine(imageLogoValidator, imageLogoValidatorMsg).optional(), // TODO: make it mandatory
    imageLogoDark: image().refine(imageLogoValidator, imageLogoValidatorMsg).optional(),
    imageTeam: image().refine((img) => img.width >= 500, {
      message: "Cover image must be at least 500 pixels wide!",
      // This part of the config file needs to be reviewed and changed at a later date.
    }).optional(),
    videoAd: z.string().optional(),
  }),
});

const testCollection = defineCollection({
  type:'content',
  schema: z.object({
    title: z.string(),
    id:z.string(),
    publishedDate: z.date(),
  })
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'posts': blogCollection,
  'projects': projectCollection,
};
