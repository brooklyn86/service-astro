import { z } from 'zod';

const findManyShopSchema = z.object({
    id: z.string().uuid().optional(),
    title: z.string().optional(),
    category_id: z.string().uuid().optional(),
    client_id: z.string().uuid().optional(),
    active : z.boolean().optional(),
});
export default findManyShopSchema;
