
import { z } from 'zod';

const findCategorySchema = z.object({
    id: z.string().uuid(),
});
export default findCategorySchema;