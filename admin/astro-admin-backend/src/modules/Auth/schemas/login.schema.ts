import { z } from 'zod';

const authUserSchema = z.object({
    username: z.string(),
    password: z.string(),
});
export default authUserSchema;