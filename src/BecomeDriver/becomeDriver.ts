import { z } from 'zod';

//& schema for the required data from the vin lookup service
export const VinLookupCarDataSchema = z
  .object({
    ErrorCode: z.string().includes('0'), // must contain "0"
    Make: z.string().min(1),
    Model: z.string().min(1),
    ModelYear: z.string().min(1),
    FuelTypePrimary: z.string().min(1),
    FuelTypeSecondary: z.string(), // can be empty
  })
  .passthrough(); // allow extra keys from API

export type VinLookupCarData = z.infer<typeof VinLookupCarDataSchema>;
