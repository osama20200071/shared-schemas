'use strict';

var zod = require('zod');

const userSchema = zod.z.object({
    id: zod.z.string(),
    name: zod.z.string(),
    email: zod.z.string().email(),
});

const noteSchema = zod.z.object({
    id: zod.z.string(),
    title: zod.z.string(),
    description: zod.z.string(),
});

//& schema for the required data from the vin lookup service
const VinLookupCarDataSchema = zod.z
    .object({
    ErrorCode: zod.z.string().includes('0'), // must contain "0"
    Make: zod.z.string().min(1),
    Model: zod.z.string().min(1),
    ModelYear: zod.z.string().min(1),
    FuelTypePrimary: zod.z.string().min(1),
    FuelTypeSecondary: zod.z.string(), // can be empty
})
    .passthrough(); // allow extra keys from API

exports.VinLookupCarDataSchema = VinLookupCarDataSchema;
exports.noteSchema = noteSchema;
exports.userSchema = userSchema;
