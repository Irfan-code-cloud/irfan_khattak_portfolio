// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        date: z.string().optional(),
        githubUrl: z.string().url().optional(),
        liveUrl: z.string().url().optional(),
    }),
});

export const collections = {
    'projects': projectsCollection,
};