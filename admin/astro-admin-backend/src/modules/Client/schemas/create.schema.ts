import { z } from 'zod';

const createCategorySchema = z.object({
    username: z.string(),
    password: z.string(),
});
export default createCategorySchema;