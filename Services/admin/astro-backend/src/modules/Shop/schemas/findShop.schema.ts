
import { z } from 'zod';

const findShopSchema = z.object({
    id: z.string().uuid(),
});
export default findShopSchema;