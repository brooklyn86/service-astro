import { z } from 'zod';

const createClientSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    cnpj: z.string(),
    active: z.boolean(),
});

export default createClientSchema;