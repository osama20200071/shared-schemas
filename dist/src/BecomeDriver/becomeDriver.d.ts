import { z } from 'zod';
export declare const VinLookupCarDataSchema: z.ZodObject<{
    ErrorCode: z.ZodString;
    Make: z.ZodString;
    Model: z.ZodString;
    ModelYear: z.ZodString;
    FuelTypePrimary: z.ZodString;
    FuelTypeSecondary: z.ZodOptional<z.ZodString>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    ErrorCode: z.ZodString;
    Make: z.ZodString;
    Model: z.ZodString;
    ModelYear: z.ZodString;
    FuelTypePrimary: z.ZodString;
    FuelTypeSecondary: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    ErrorCode: z.ZodString;
    Make: z.ZodString;
    Model: z.ZodString;
    ModelYear: z.ZodString;
    FuelTypePrimary: z.ZodString;
    FuelTypeSecondary: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">>;
export type VinLookupCarData = z.infer<typeof VinLookupCarDataSchema>;
