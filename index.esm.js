import { z } from 'zod';

const userSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
});

const noteSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
});

//& schema for the required data from the vin lookup service
const VinLookupCarDataSchema = z
    .object({
    ErrorCode: z.string().includes('0'), // must contain "0"
    Make: z.string().min(1),
    Model: z.string().min(1),
    ModelYear: z.string().min(1),
    FuelTypePrimary: z.string().min(1),
    FuelTypeSecondary: z.string(), // can be empty
})
    .passthrough(); // allow extra keys from API

export { VinLookupCarDataSchema, noteSchema, userSchema };
