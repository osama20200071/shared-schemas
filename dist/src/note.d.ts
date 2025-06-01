import { z } from 'zod';
export declare const noteSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id?: string;
    title?: string;
    description?: string;
}, {
    id?: string;
    title?: string;
    description?: string;
}>;
