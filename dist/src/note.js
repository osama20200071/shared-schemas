import { z } from 'zod';
export const noteSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
});
