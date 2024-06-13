import { z } from 'zod';

export const createBookingValidationSchema = z.object({
  body: z.object({
    date: z.string(),
    startTime: z.string(),
    endTime: z.string(),
    // user: z.string({ invalid_type_error: 'User id must be a string' }),
    facility: z.string({ invalid_type_error: 'User id must be a string' }),
    // payableAmount: z.number(),
    // isBooked: z.enum(['confirmed', 'unconfirmed', 'canceled']),
  }),
});
