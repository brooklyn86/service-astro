import { z } from 'zod';

const createUserSchema = z.object({
    username: z.string(),
    password: z.string(),
});
export default createUserSchema;