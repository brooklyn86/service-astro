import { z } from 'zod';

const findManyCategorySchema = z.object({
    id: z.string().uuid().optional(),
    title: z.string().optional(),
    active : z.boolean().optional(),
});
export default findManyCategorySchema;
