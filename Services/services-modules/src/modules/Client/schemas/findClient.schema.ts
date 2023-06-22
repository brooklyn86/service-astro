
import { z } from 'zod';

const findClientSchema = z.object({
    id: z.string().uuid(),
});
export default findClientSchema;