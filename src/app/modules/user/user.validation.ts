import { z } from 'zod';

export const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    password: z
      .string({ invalid_type_error: 'Password must be a string' })
      .max(20, 'Password cannot be more than 20 characters'),
  }),
  role: z.string(),
  address: z.string(),
});
