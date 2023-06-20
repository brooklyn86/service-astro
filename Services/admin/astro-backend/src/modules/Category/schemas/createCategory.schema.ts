import { z } from 'zod';

const createCategorySchema = z.object({
    title: z.string(),
    active: z.boolean(),

});


export default createCategorySchema;