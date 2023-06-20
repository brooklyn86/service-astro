import { z } from 'zod';

const findManyClientSchema = z.object({
    id: z.string().uuid().optional(),
    firstName: z.string(),
    lastName: z.string(),
    cnpj: z.string(),
    active: z.boolean(),
});
export default findManyClientSchema;
