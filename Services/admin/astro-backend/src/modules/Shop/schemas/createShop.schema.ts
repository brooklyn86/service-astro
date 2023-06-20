import { z } from 'zod';

const profileSchema =  z.object({
    description: z.string().nonempty(),
    profile_url: z.string().nonempty(),
    cover_url: z.string().nonempty(),
});

const createShopSchema = z.object({
    title: z.string(),
    category_id: z.string(),
    client_id: z.string(),
    profile : profileSchema,
    active: z.boolean(),

});


export default createShopSchema;